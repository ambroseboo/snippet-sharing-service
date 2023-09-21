import { pool } from "../config/db.config.js";

export const getSnippets =  (req, res) => {
    pool.query('SELECT * FROM snippet', (error, snippets) => {
      if (error) {
        throw error
      }
      res.status(200).json(snippets.rows)
    })
}