'use strict';

require('dotenv').load();

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host : 'localhost',
  port : +process.env.DB_PORT,
  dialect : 'postgres'
});

var models = {};
models.sequelize = sequelize;
models.Cat = sequelize.import('./cat.js');

module.exports = models;
