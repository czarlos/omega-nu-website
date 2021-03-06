var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');

var routes = require('./routes/index');
var users = require('./routes/users');
var apply = require('./routes/apply');
var application = require('./routes/application');
var dashboard = require('./routes/dashboard');
var login = require('./routes/login');

var app = express();

//listen on port 8888
//app.listen(8888);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/*NOTE: It is VERY important that this isn't moved, placement is key*/
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://www.omeganu.us');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

app.use('/users', users);
app.use('/apply', apply);
app.use('/application', application);
app.use('/dashboard', dashboard);
app.use('/login', login);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
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

if (process.env.NODE_ENV === 'production') {
    var options = {
        key: fs.readFileSync('keys/key.pem'),
        cert: fs.readFileSync('keys/key-cert.pem'),
        requestCert: false,
        requestUnauthorized: false
    }
    https.createServer(options, app).listen(8888);
}
else {
    http.createServer(app).listen(8888);
}

module.exports = app;
