'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('index', 'Got Here!');
  res.render('index');
});


module.exports = router;