'use strict';

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
}); 

var Place = db.define('place', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING,
    validate: {
      len: [2,2],
      isUppercase: true
    }
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    isArray: true
  }
});

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.STRING
  }
});

