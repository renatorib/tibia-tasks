function random(hash){
    var c = 'bcdfghjklmnpqrstvxywz';
    var v = 'aeiou';

    function generateLetter(string){
        return string.charAt(Math.floor(Math.random() * string.length));
    }

    function capitalize(string){
        return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    }

    while(hash.indexOf('(c)') > -1) hash = hash.replace(':c', generateLetter(c));
    while(hash.indexOf('(v)') > -1) hash = hash.replace(':v', generateLetter(v));

    hash = hash.replace(/\(([\d]+)\)/g, function(n){
        n = n.replace('(', '');
        n = n.replace(')', '');
        var i = 0;
        var t = '';
        var l;
        while(i < parseInt(n)){
            l = (i % 2 == 0) ? c : v;
            t += generateLetter(l);
            i++;
        }
        return t;
    });

    return capitalize(hash.toLowerCase());
}

module.exports = random;
