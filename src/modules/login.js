module.exports = function(acc, password, cb){
    this.post('account/?subtopic=accountmanagement', {
        loginname: acc,
        loginpassword: password,
        'Login.x': '0',
        'Login.y': '0',
        page: 'overview'
    }, function(err, res, body){
        if(err) throw new Error(err);
        var failed = (body.indexOf('Account name or password is not correct.') > -1);
        cb(!failed, res, body);
    });
}
