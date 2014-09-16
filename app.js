var express = require('express');

var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//添加会话
var session = require('express-session');
var bodyParser = require('body-parser');

var index = require('./routes/index');
//var users = require('./routes/users');


var app = express();



//引入mongoose模块(在express()后)
var mongoose = require('mongoose');
//创建数据库连接,参数是从config配置文件的json对象中获取的连接信息
mongoose.connect("mongodb://localhost/ALGZ");
var db = mongoose.connection;
//mongodb数据库连接错误的时候被调用
db.on('error', console.error.bind(console, '数据库连接错误:'));
//数据库成功打开的时候被调用
db.once('open', function callback () {
    console.log('数据库连接成功!');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

//定义静态资源
app.use(express.static(path.join(__dirname, 'public')));
//加载会话中间件,需放在静态资源和cookie解析后面
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'keyboard cat'
}));


//定义视图静态变量:与请求无法的变量或方法函数
app.locals.title='bootrap3';//定义标题
//使用中间件功能(中间件按顺序匹配请求路径,即参数1(参数1为可选,默认为"/"),完成视图动态助手(变量/方法等)赋值
app.use(function(req, res, next) {
    res.locals.user=req.session.user;//定义用户信息
//    // 定义动态视图助手变量
//    response.locals.dynamicVar = "dynamic var";
//    // 定义动态视图助手方法
//    response.locals.dynamicFn = function() {
//        return "dynamic function";
//    }
    // 不要忘记 next()
    next();
});

////自定义权限验证中间件
//app.user(function(req,res,next){
//
//})
//定义路由
app.use('/', index);
//app.use('/user', users);



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
