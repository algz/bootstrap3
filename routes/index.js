var express = require('express');
var router = express.Router();
var common=require('../common/common')


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

/**************** 发表话题 *******************/
var topicAction=require('../controllers/topic')
router.post("/publish",topicAction.publish);
router.get("/publish",common.authorize,function(req,res){
    res.render("publish");
});

/* GET 详细页面. */
router.get('/thread', function(req, res) {
    res.render('thread', { title: 'Express' });
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
