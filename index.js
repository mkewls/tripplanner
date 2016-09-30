'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var routes = require('./routes');
var path = require('path');
var express = require('express');
var app = new express();


var models = require('./models');
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;


nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);

// logger
app.use(morgan('dev'));

// body parsing
app.use(bodyParser.urlencoded({ extended: true })); // html forms
app.use(bodyParser.json());

// server init
//app.listen(3000, function() { 
//  console.log('Listening on Port 3000'); 
//});

// open public dir
app.use(express.static(path.join(__dirname, '/public')));
// use router
app.use('/', routes);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('error');
});

Place.sync()
    .then(function () {
        return Hotel.sync();
    })
    .then(function () {
        return Activity.sync();
    })
    .then(function () {
        return Restaurant.sync();
    })
    .then(function () {
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
});

