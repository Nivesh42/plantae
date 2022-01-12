const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'build/index.html');
});

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log('Server Up and running');
});
