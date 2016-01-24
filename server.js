var express = require('express');
var app = express();
var tibia = require('./src/tibia');

app.get('/login', function (req, res) {
    // testing propouses
});

app.get('/character/create', function (req, res) {
    // testing propouses
});

app.get('/account', function (req, res) {
    // testing propouses
});

app.listen(4545, function () {
  console.log('Example app listening on port 3000!');
});
