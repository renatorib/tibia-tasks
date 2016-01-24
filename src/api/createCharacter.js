module.exports = function(name, sex, world, cb){
    this.post('account/?subtopic=accountmanagement&page=createcharacter&step=createcharacter', {
        name: name,
        sex: sex,
        world: world,
        group: '',
        tutorial: '',
        'Continue.x': 97,
        'Continue.y': 18
    }, function(err, res, body){
        if(err) throw new Error(err);
        var success = (body.indexOf('See you in Tibia!') > -1);
        cb(success, res, body);
    });
}
