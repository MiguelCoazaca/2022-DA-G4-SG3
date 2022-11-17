'use strict';
var express = requite('express');
var router = express.Router();

var getData = function(){
    var data = {
        'item1' : 'https://static.wikia.nocookie.net/caracteres/images/7/75/Mario.png/revision/latest?cb=20120910002750&path-prefix=es',
        'item2' : 'https://static.wikia.nocookie.net/caracteres/images/7/75/Mario.png/revision/latest?cb=20120910002750&path-prefix=es',
        'item3' : 'https://static.wikia.nocookie.net/caracteres/images/7/75/Mario.png/revision/latest?cb=20120910002750&path-prefix=es'
    }
    return data;
}

router.get('/', function(req,res){
    res.render('index',{title:'Express', "data": getData()})
});

module.exports = router;