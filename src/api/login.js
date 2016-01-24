module.exports = function(acc, password, cb){
    this.post('account/?subtopic=accountmanagement', {
        loginname: acc,
        loginpassword: password,
        'Login.x': '0',
        'Login.y': '0',
        page: 'overview'
    }, function(e, r, b){
        if(!e){
            var failed = (b.indexOf('Account name or password is not correct.') > -1);
            if(failed){
                cb(false, r, b);
            } else {
                cb(true, r, b);
            }
        } else {
            throw new Error(e);
        }
    });
}
