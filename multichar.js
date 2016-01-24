var tibia = require('./src/tibia');
var random = require('./src/lib/random');
var async = require('async');

var acc = "testeaccs";
var pass = "testeaccs1";
var sex = "male";
var world = "Quilia";
var name = "Renato (12)";
var count = 20;

async.series([
    function(next){
        tibia.login(acc, pass, function(){
            next();
        });
    },
    function(next) {
        var funcs = [];
        for(i=0; i<count; i++){
            funcs.push(function(next){
                var nameGen = random(name);
                tibia.createCharacter(nameGen, sex, world, function(success){
                    if(success){
                        next(null, 'Created: ' + nameGen);
                    } else {
                        next(null, 'Failed to create: ' + nameGen);
                    }
                });
            });
        }
        async.series(funcs, function(err, results) {
            next(null, results);
        });
    }
], function(err, results) {
    console.log(results);
});
