const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'postgres', 'safepswd', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log
});

module.exports = sequelize;
