var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});


router.post("/publish",function(req,res){
    console.log('publish');
});

/* GET 详细页面. */
router.get('/thread', function(req, res) {
    res.render('thread', { title: 'Express' });
});

router.get("/publish",function(req,res){
    res.render("publish",{title:'Express'});
});



/********用户管理************/
var userAction=require('../controllers/user');
router.get("/login",function(req,res){//跳转登录页面
    res.render("login");
});
router.post("/login",userAction.login);//登录
router.get("/logout",userAction.logout);//登出

router.get("/reg",function(req,res){//跳转注册页面
    res.render("reg.ejs");
});
router.post("/reg",userAction.reg);//注册


module.exports = router;
