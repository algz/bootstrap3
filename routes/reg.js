/**
 * Created by algz on 2014/9/4.
 */
var express=require('express');
var router=express.Router();



router.post("/reg",function(req,res){
    console.log(req.param("username"));
    console.log(req.query.id);
    res.redirect('/');
})