const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tmr2023', 'postgres', 'vieckhovoich', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;