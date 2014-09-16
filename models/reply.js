var mongoose=require('mongoose');
var Schema=mongoose.Schema;

/*
主题回复
 */
var ReplySchema=new Schema({
    content:String, //内容
    author_id:Schema.Types.ObjectId, //作者
    create_date:{type:Date,default:Date.now},//创建时间
    update_date:{type:Date,default:Date.now},//编辑时间
    topic_id:Schema.Types.ObjectId //外键关联主题
});

exports.ReplyModel=mongoose.model('Reply',ReplySchema);