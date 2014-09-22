exports.authorize=function(req,res,next){
    if(!req.session.user){
        res.redirect('login');
        return;
    }
    return next();
}