let createError = require('http-errors');
let express = require('express');
let path = require('path');
let fs = require('fs')
let http = require('http')
let https = require('https')
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let articleList = require('./routes/articleList');
let addArticle = require('./routes/addArticle');
let renewList = require('./routes/renewList');
let addRenew = require('./routes/addRenew')
let friendList = require('./routes/FriendList')
let addFriend = require('./routes/addFriend')
let deleteItems = require('./routes/deleteItems')

const httpsOption = {
    key: fs.readFileSync("./https/4432850_www.czjdream.com.key"),
    cert: fs.readFileSync("./https/4432850_www.czjdream.com.pem")
}

let app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/articleList', articleList);
app.use('/addArticle', addArticle);
app.use('/renewList', renewList);
app.use('/addRenew', addRenew);
app.use('/friendList', friendList);
app.use('/addFriend', addFriend);
app.use('/deleteItems', deleteItems);
app.use('myImg', express.static('./public/myImg'))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// app.listen(8082)
http.createServer(app).listen(8082);
https.createServer(httpsOption, app).listen(8088);
module.exports = app;