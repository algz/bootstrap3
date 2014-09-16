/**
 * Created by algz on 2014-09-02 .
 */
var mongoose=require('mongoose').Schema;

var topicCategorySchema=mongoose.Schema({
    name:String
})

exports.TopicCategory=mongoose.model("TopicCategory",topicCategorySchema);