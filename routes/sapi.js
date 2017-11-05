'use strict';

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

var verify = function verify(req, res, next) {
  console.log(req.cookies);
  var authorized = JSON.parse(process.env.AUTHORIZED);
  var authenticated = authorized.indexOf(req.cookies.admin) >= 0;
  if (authenticated || process.env.ENV === "dev") {
    console.log("Authenticated request");
    next();
  } else {
    console.log("Unauthenticated access");
    res.status(401).text("Unauthenticated");
  }
};
router.use('/', verify);

router.use('/', require('./sapi/blog'));
router.use('/', require('./sapi/tag'));
router.use('/', require('./sapi/author'));

module.exports = router;