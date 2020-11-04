"use strict";

require("dotenv").config();

var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs(process.env.DB_URI, ["beshvili"]);

router.get("/user/logged", function (req, res, next) {
  var authorized = JSON.parse(process.env.AUTHORIZED);
  var authenticated = authorized.indexOf(req.cookies.admin) >= 0;
  res.json({ name: req.cookies.loggedUser, admin: authenticated });
});

module.exports = router;