
//User是models.js返回的实例,exports.User = mongoose.model("User",userSchema);
var UserModel = require('../models/user').UserModel;
var express = require('express');
/**
 * 登陆
 * @param req
 * @param res
 */
exports.login=function(req,res){
    UserModel.findOne({userName:req.param("username")},function(err,user){
        if(err){
            console.log(err.message);
            return;
        };
        if(!user){
            //return res.redirect('login',{err:'用户不存在'}); // X
            return res.render('login',{err:'用户不存在'});//只能重定向用:req.headers.referer
            //return res.render(req.headers.referer||'/',{err:'用户不存在!'}) // X
        }
        req.session.user=user;
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
    console.log(req.param("username"));
    console.log(req.query.id);
    //res.redirect('/');

    UserModel.findOne({username:req.param('username')},function(err,user){
        if(err){
            console.log(err.message);
            return;
        }
        if(user){
            res.render('reg',{err:'用户名已存在'});
            return;
        }
        user = new UserModel({
            userName: req.param('username'),
            passWord: req.param('password')
        });
        user.save(function (err,user) {
            if (err) {
                callback(err);
            }
            req.session.user=user;
            res.redirect( '/');
        });
    });

    //res.send('respond with a resource');
}