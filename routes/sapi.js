'use strict';

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

var verify = function verify(req, res, next) {
  console.log(req.signedCookies);
  var authorized = JSON.parse(process.env.AUTHORIZED);
  var authenticated = authorized.indexOf(req.signedCookies.admin) >= 0;
  if (authenticated) {
    console.log("Authenticated request");
    next();
  } else {
    console.log("Unauthenticated access");
    res.redirect('/');
  }
};
router.use('/', verify);

router.use('/', require('./sapi/blog'));
router.use('/', require('./sapi/tag'));
router.use('/', require('./sapi/author'));

module.exports = router;