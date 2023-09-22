import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import router from './routes/snippets.routes.js';

const app = express();

const PORT = process.env.PORT || 9000;

app.use(router);

// handling errors
app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});


app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})