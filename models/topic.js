
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

/**
 * 主题内容
 * @type {Schema}
 */
var topicSchema=new Schema({
    caption:String, //标题
    main_body:String,//正文
    author_id:Schema.Types.ObjectId, //作者id
    create_date:{type:Date,default:Date.now},
    is_top:{type:Boolean,default:false}//是否置顶
});
exports.TopicModel=mongoose.model("Topic",topicSchema);