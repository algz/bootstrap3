/**
 * Created by algz on 2014-09-02 .
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    loginname:String,//登陆名
    aliasname:String,//昵称
    password:String//密码
});

//创建索引，键后面的数字为索引方向，1表示升序，-1表示降序
//s
userSchema.index({username:1},{unique:true});
exports.UserModel = mongoose.model("User",userSchema);