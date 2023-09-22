import { url } from "node:inspector";
import { pool } from "../config/db.config.js";
import { createHash } from 'node:crypto'

const md5 = (content) => {
    return createHash('md5').update(content).digest('hex')
}

export const getSnippets =  (req, res) => {
    pool.query('SELECT * FROM snippet', (error, snippets) => {
      if (error) {
        throw error
      }
      res.status(200).json(snippets.rows)
    })
}

export const postSnippet = async (req, res) => {
    const {content, title, expiry} = req.body;
    
    let isUniqueHashFound = false;
    let hash = '';
    const currDate = new Date();
    while (!isUniqueHashFound) {
        let randInt = Math.floor(Math.random() * 100);
        hash = md5(title + currDate + String(randInt));

        let query = "select exists(select 1 from snippet where url_hash='" + hash + "')";
        let result = await pool.query(query);

        if (!result.rows[0]['exists']) {
            isUniqueHashFound = true;
        }
    }

    const expiryDate = new Date(currDate.getTime() + Number(expiry)*60000);
    const query = "INSERT INTO snippet (content, title, added_date, expiry_date, views, url_hash) VALUES ("
    + "'" + content + "'" + "," + "'" + title + "'" + ", '" + currDate.toISOString() + "' , '" + expiryDate.toISOString() + "', 0, '" +  hash + "')";
    pool.query(query, 
        (error) => {
            if (error) {
              throw error
            }
            res.send(hash)
        })
}

export const getSnippet = async (req, res) => {
    const url_hash = req.params['url_hash'];

    let query = "SELECT * FROM snippet WHERE url_hash='" + url_hash + "'";

    let snippet = await pool.query(query)

    if (snippet.rows.length === 0) {
        res.send('not found');
    } else {
        const expiry_date = snippet.rows[0]['expiry_date'];
        const now = new Date(new Date().getTime() - 480*60000); // fix for timezone issues for now

        if (expiry_date < now) {
            // redirect to not found page
            res.send('not found');
        } else {
            query = "UPDATE snippet SET views = views+1 WHERE url_hash='" + url_hash + "'";
            await pool.query(query)
            res.status(200).json(snippet.rows[0])
        }
    }
}