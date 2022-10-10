'use strict';

const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

//requiring the database tables 
const userModel = require('./user-model');


// this for making sure that if we are in testing mode the data base url will take sqlite memory value
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

// creating a new instance of the Sequelize schema based on the existing DATABASE_URL amnd the sequelize options,
const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);


// relations between the tables
////////////////////////////////

let Usermodel = userModel(sequelize, DataTypes)

module.exports = {
    db: sequelize,
    Usermodel: Usermodel
}




