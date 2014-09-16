
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

/**
 * 主题内容
 * @type {Schema}
 */
var topicSchema=new Schema({
    title:String, //标题
    content:String,//内容
    author_id:Schema.Types.ObjectId, //作者\
    create_date:{type:Date,default:Date.now},
    isTop:Boolean//是否置顶
});
exports.TopicModel=mongoose.model("Topic",topicSchema);