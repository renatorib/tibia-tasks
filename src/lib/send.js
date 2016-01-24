var request = require('request');
var jar = request.jar();

function sendpost(path, data, callback){
    var fullurl = this.url + path;
    request({
        url: fullurl,
        form: data,
        method: 'POST',
        jar: jar
    }, function(error, res, body){
        callback(error, res, body);
    });
}

function sendget(path, callback){
    var fullurl = this.url + path;
    request({
        url: fullurl,
        method: 'GET',
        jar: jar
    }, callback);
}

module.exports = {
    post: sendpost,
    get: sendget
}
