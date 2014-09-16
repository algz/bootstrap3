exports.authorize=function(req,res,next){
    if(!req.session.user){
        res.redirect('reg');
        return;
    }
    return next();
}