'use strict';

require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

router.get('/blogs', function (req, res, next) {
  db.blogs.find(function (err, blogs) {
    if (err) {
      res.send(err);
    } else {
      res.json(blogs);
    }
  });
});
/* GET One blog with the provided ID */
router.get('/blog/:id', function (req, res, next) {
  var validId = typeof id !== "undefined" && (id.length == 12 || id.length == 24) && /^[0-9a-fA-F]+$/.test(id);
  if (validId) {
    db.blogs.findOne({
      _id: mongojs.ObjectId(req.params.id)
    }, function (err, blog) {
      if (err) {
        res.send(err);
      } else {
        res.json(blog);
      }
    });
  } else {
    db.blogs.find().limit(1).sort({ $natural: -1 }, function (err, blogs) {
      if (err) {
        res.send(err);
      } else if (blogs.length == 0) {
        res.send("no entry found");
      } else {
        res.json(blogs[0]);
      }
    });
  }
});

module.exports = router;