var express = require('express');
var router = express.Router();






//实际URL访问 /user/reg
router.get('/reg',function(req,res){
    res.render('reg');
});

//登录功能. 实际URL访问 /user/reg
router.post('/reg', function(req, res) {
    console.log(req.param("username"));
    console.log(req.query.id);
    //res.redirect('/');
    var user = new User({
        userName :req.param("username"),
        passWord :'3'
    });
    user.save(function (err) {
        if (err) {
            callback(err);
        }
    });

    res.send('respond with a resource');
});



module.exports = router;
