'use strict';

var express = require('express');
var router = express.Router();

router.use('/admin/', require('./admin'));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('/client/src/index.html');
});

module.exports = router;