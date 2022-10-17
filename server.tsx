const express = require('express');
const app = express();
require('dotenv').config();
const data = require('./data.json');


const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/photos', (req, res) => {
  res.send(data);

});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});