'use strict';

require("dotenv").config();
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.DB_URI, ['beshvili']);

// /* GET All Todos */
router.get('/config/:item', function (req, res, next) {
  var item = req.params["item"];
  if (!["ENV", "API_URL"].includes(item)) res.json();
  res.send(process.env[item]);
});
// /* GET One Todo with the provided ID */
// router.get('/todo/:id', function(req, res, next) {
//   db.todos.findOne({
//     _id: mongojs.ObjectId(req.params.id)
//   }, function(err, todos) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(todos);
//     }
//   });
// });
// /* POST/SAVE a Todo */
// router.post('/todo', function(req, res, next) {
//   var todo = req.body;
//   if (!todo.text || !(todo.isCompleted + '')) {
//     res.status(400);
//     res.json({
//       "error": "Invalid Data"
//     });
//   } else {
//     db.todos.save(todo, function(err, result) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json(result);
//       }
//     })
//   }
// });
// /* PUT/UPDATE a Todo */
// router.put('/todo/:id', function(req, res, next) {
//   var todo = req.body;
//   var updObj = {};
//   if (todo.isCompleted) {
//   updObj.isCompleted = todo.isCompleted;
//   }
//   if (todo.text) {
//   updObj.text = todo.text;
//   }
//   if (!updObj) {
//     res.status(400);
//     res.json({
//       "error": "Invalid Data"
//     });
//   } else {
//     db.todos.update({
//     _id: mongojs.ObjectId(req.params.id)
//     }, updObj, {}, function(err, result) {
//       if (err) {
//       res.send(err);
//       } else {
//       res.json(result);
//       }
//     });
//   }
// });
// /* DELETE a Todo */
// router.delete('/todo/:id', function(req, res) {
//   db.todos.remove({
//     _id: mongojs.ObjectId(req.params.id)
//   }, '', function(err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

router.use('/', require('./api/static'));
router.use('/', require('./api/blog'));
router.use('/', require('./api/tag'));
router.use('/', require('./api/author'));

module.exports = router;