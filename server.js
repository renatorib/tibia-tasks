var express = require('express');
var app = express();
var tibia = require('./src/tibia');

app.get('/login', function (req, res) {
    tibia.login("arjenrobben", "88147358r", function(success, r, b){
        res.send(b);
    });
});

app.get('/character/create', function (req, res) {
    tibia.createCharacter("Hallsiny", "male", "Quilia", function(success, r, b){
        res.send(b);
    });
});

app.get('/account', function (req, res) {
    tibia.account(function(e, r, b){
        //res.send(r.headers['set-cookie']);
        res.send(b);
    });
});

app.listen(4545, function () {
  console.log('Example app listening on port 3000!');
});
