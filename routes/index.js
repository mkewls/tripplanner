'use strict';
var models = require('../models');
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  Place.findAll({ include: [ Hotel,Activity,Restaurant ] }).then(function(places) {
    res.render('index', { places: places });
  });
});


module.exports = router;