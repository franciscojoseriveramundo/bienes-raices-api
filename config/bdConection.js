const Sequelize = require('sequelize');

const sequelize = new Sequelize('bkvr6afh90lntut7zlay', 'uccyyf00d6p1cs9k', 'bAiGtlCuannbB7tZDT6T', {
  host: 'bkvr6afh90lntut7zlay-mysql.services.clever-cloud.com',
  // una de estas opciones dependiendo el gestor de la base
  dialect: 'mysql',
})

module.exports = sequelize;