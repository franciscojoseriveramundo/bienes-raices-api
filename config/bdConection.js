const Sequelize = require('sequelize');

const sequelize = new Sequelize('db-bienes-raices', 'bienes-raices', '}E5?xU5?^Qc,-@kA', {
  host: '34.66.142.60',
  // una de estas opciones dependiendo el gestor de la base
  dialect: 'mysql',
})

module.exports = sequelize;