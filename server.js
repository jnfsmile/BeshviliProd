'use strict';

require('dotenv').config();

if (process.env.NODE_ENV === "production") require('newrelic');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var admin = require('./routes/admin');
var api = require('./routes/api');
var sapi = require('./routes/sapi');

var app = express();

// Set the port for this app
var port = process.env.PORT || 8080;

// view engine setup
//app.set('views', path.join(__dirname, 'client'));
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(function (req, res, next) {
  if (process.env.ENV !== "dev") {
    //The Heroku way to check for https
    if (req.header('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.header('host') + req.url);
    }
  }
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')));
//app.use(express.static(path.join(__dirname, '')));
app.use('/client', express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/dist')));

app.disable('etag');

if (process.env.ENV === "dev") {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
    next();
  });
}

app.use('/', index);
app.use('/admin/', admin);
app.use('/api/v1/', api);
app.use('/sapi/v1/', sapi);

// 404 catch
app.all('*', function (req, res, next) {
  var indexPath = '/client/index.html';
  if (process.env.ENV === "dev") {
    indexPath = '/client/src/index.html';
  }
  res.status(200).sendFile(path.join(__dirname, indexPath), {}, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent: file');
    }
  });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(port, function () {
  var host = 'localhost';
  var port = server.address().port;
  console.log('App listening at //%s:%s', host, port);
});

module.exports = app;
