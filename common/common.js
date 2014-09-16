exports.authorize=function(req,res,next){
    if(!req.session.user){
        return false
    }
    return next();
}