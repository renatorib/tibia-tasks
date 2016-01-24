var send = require('./lib/send');

function tibia(){
    this.url = "https://secure.tibia.com/";
    this.post = send.post;
    this.get = send.get;

    this.login = require('./api/login');
    this.account = require('./api/account');
    this.createCharacter = require('./api/createCharacter');

}

module.exports = new tibia();
