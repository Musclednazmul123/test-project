const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
const hostname = process.env.HOST_Name || 'localhost';

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Hello world',
  });
});

app.get('*', (req, res) => {
  res.send({
    success: false,
    message: 'Page Not found',
  });
});

app.listen(port, hostname, () => {
  console.log(`Server is running.. http://${hostname}:${port}`);
});
