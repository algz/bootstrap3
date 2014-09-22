var topicModel=require('../models/topic').TopicModel;

exports.publish=function(req,res){
    var topic=new topicModel({
        caption:req.param('caption'),
        main_body:req.param('main_body'),
        author_id:req.session.user._id
    })
    topic.save(function(err,t){
        if(err){
            console.log(err.message);
            return;
        }
        res.redirect('/');
    })
}