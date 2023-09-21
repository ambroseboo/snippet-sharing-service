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
    const {content, title, added_date, expiry_date} = req.body;
    
    let isUniqueHashFound = false;
    let hash = '';
    while (!isUniqueHashFound) {
        let randInt = Math.floor(Math.random() * 100);
        hash = md5(title + added_date + String(randInt));

        let query = "select exists(select 1 from snippet where url_hash='" + hash + "')";
        let result = await pool.query(query);
        console.log(result);

        if (!result.rows[0]['exists']) {
            isUniqueHashFound = true;
        }
    }

    const query = "INSERT INTO snippet (content, title, added_date, expiry_date, views, url_hash) VALUES ("
    + "'" + content + "'" + "," + "'" + title + "'" + ", '" + added_date + "' , '" + expiry_date + "', 0, '" +  hash + "')";
    pool.query(query, 
        (error) => {
            if (error) {
              throw error
            }
            res.status(200)
        })
}

export const getSnippet = async (req, res) => {
    const url_hash = req.params['url_hash'];

    let query = "SELECT * FROM snippet WHERE url_hash='" + url_hash + "'";

    let snippet = await pool.query(query)

    if (snippet.rows.length === 0) {
        // redirect to not found page
        res.redirect("https://www.google.com")
    } else {
        res.status(200).json(snippet.rows[0])
    }
}