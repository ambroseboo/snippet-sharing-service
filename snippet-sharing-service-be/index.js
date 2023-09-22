import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import router from './routes/snippets.routes.js';
var cors = require('cors')

const app = express();

const PORT = process.env.PORT || 9000;

app.use(router);

app.use(cors());

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});


app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})