const { Sequelize, DataTypes, Op } = require('sequelize');

let mysql = require('mysql');
let config = require('./config/config.js');

var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const sequelize = require('./config/bdConection');

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 8080, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});

/*
let connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Se realizó la conexion a la base de datos');
});
*/

//sequelize.authenticate()
//.then(() => {
//  console.log('Se realizó la conexion a la base de datos');
//})
//.catch(err => {
//  console.log('No se pudo conectar el API con la base de datos', err)
//})