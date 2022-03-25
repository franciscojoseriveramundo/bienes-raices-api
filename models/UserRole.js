// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');

// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = require('../config/bdConection');

const UserRole = sequelize.define('UserRole', {
    UserRoleId:{
        type: DataTypes.BIGINT,
        primaryKey : true
    },
    UserRoleName:{
        type: DataTypes.STRING(100),
    },
  },{
      freezeTableName : true,
      timestamps : false,
      tableName: 'UserRole'
  });

module.exports = UserRole;