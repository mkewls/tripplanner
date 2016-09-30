'use strict';

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://postgres@localhost:5432/tripplanner', {
    logging: false
});

var Place = db.define('places', {
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING,
        len: [2, 2],
        isUppercase: true
    },
    phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        isArray: true
    }
});

var Hotel = db.define('hotels', {
    name: {
        type: Sequelize.STRING
    },
    num_stars: {
        type: Sequelize.INTEGER,
        max: 5,
        min: 1
    },
    amenities: {
        type: Sequelize.STRING
    }
});

var Activity = db.define('activities', {
    name: {
        type: Sequelize.STRING
    },
    age_range: {
        type: Sequelize.STRING
    }
});

var Restaurant = db.define('restaurants', {
    name: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER,
        max: 5,
        min: 1
    }
})

Hotel.belongsTo(Place);
Place.hasMany(Hotel);
Activity.belongsTo(Place);
Place.hasMany(Activity);
Restaurant.belongsTo(Place);
Place.hasMany(Restaurant);

module.exports = {
    Place: Place,
    Hotel: Hotel,
    Activity: Activity,
    Restaurant: Restaurant,
    db: db
};

