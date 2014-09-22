
//User是models.js返回的实例,exports.User = mongoose.model("User",userSchema);
var UserModel = require('../models/user').UserModel;
var express = require('express');
/**
 * 登陆
 * @param req
 * @param res
 */
exports.login=function(req,res){
    var user = new UserModel({
        username: req.param('username'),
        password: req.param('password')
    });
    res.locals.user=user;
    UserModel.findOne({
        username: req.param('username')
    },function(err,u){
        if(err){
            console.log(err.message);
            return;
        };
        if(!u){
            //return res.redirect('login',{err:'用户不存在'}); // X
            return res.render('login',{error:'用户不存在'});//只能重定向用:req.headers.referer
            //return res.render(req.headers.referer||'/',{err:'用户不存在!'}) // X
        }else if(u.password!==user.password){
            return res.render('login',{error:'密码不正确'});//只能重定向用:req.headers.referer
        }
        req.session.user=u;
        res.redirect('/');
        //res.render("index");
    });
};

exports.logout=function(req,res){
    req.session.destroy();
//    req.clearCookie();
    res.redirect(req.headers.referer || '/');
}

/**
 * 注册
 * @param req
 * @param res
 */
exports.reg=function(req,res){
    var user = new UserModel({
        username: req.param('username'),
        password: req.param('password')
    });
    res.locals.user=user;

    if(!req.param("username")){
        res.render('reg',{error:'请输入用户名'});
        return;
    }else if(!req.param("password")){
        res.render('reg',{error:'请输入密码'});
        return;
    }

    UserModel.findOne({username:req.param('username')},function(err,u){
        if(err){
            console.log(err.message);
            return;
        }
        if(u){
            res.render('reg',{error:'用户名已存在'});
            return;
        }
        user.save(function (err,user) {
            if (err) {
                console.log(err.message);
                res.render('reg',{user:user,error:err.message});
                return;
            }
            req.session.user=user;
            res.redirect( '/');
        });
    });

    //res.send('respond with a resource');
}