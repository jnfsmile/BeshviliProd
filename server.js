'use strict';

require('dotenv').config();

if (process.env.NODE_ENV === "production") require('newrelic');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
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
  console.log(req.secure);
  console.log(req.protocol);
  console.log(process.env.ENV);
  /*if(process.env.ENV !== "dev" && !req.secure) {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }*/
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
    next();
  });
}

app.use('/', index);
app.use('/api/v1/', api);
app.use('/sapi/v1/', sapi);

// 404 catch
app.all('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '/client/index.html'), {}, function (err) {
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
  console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
