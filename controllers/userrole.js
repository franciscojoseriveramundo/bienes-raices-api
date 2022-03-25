const { Sequelize, DataTypes, Op } = require('sequelize');

const UserRole = require('../models/UserRole')

function createUserRole(req, res){
    var body = req.body;
    console.log(body);
    UserRole.create(body)
    .then(userrole =>
        res.status(201).send({
            Code : 1,
            Response: 'El rol de usuario fue creado de manera exitosa'
        }))
    .catch(error =>
        res.status(500).send({
            Code: 0,
            Response: error
        }));
}

function getUserRole(req, res){
    // Hace una consulta en la base de datos.
    UserRole.findAll().then(userrole => {
        return res.json(userrole)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function getUserRoleById(req, res){
    var body = req.body;
    var id = req.params.id;

    // Hace una consulta en la base de datos.
    UserRole.findAll({
        where: {
            UserRoleId: id
        }
    }).then(userrole => {
        return res.json(userrole)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function editUserRole(req, res){
    var body = req.body;
    UserRole.update(body, {
        where: {
            UserRoleId : body.UserRoleId
        }
    })
    .then(userrole =>{
        console.log(userrole[0]);
        if(userrole[0] == 0){
            res.status(401).send({
                Code : 0,
                Response: 'El rol de usuario ' + body.UserRoleId + ' no se encuentra registrado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El rol de usuario ' + body.UserRoleId + ' fue actualizado de manera exitosa',
                userRole: req.body
            })
        }
    }
    )
    .catch(error =>
        res.status(500).send({
            Code : 0,
            Response: error
        })
    );
}

function deleteUserRole(req, res){
    var id = req.params.id;
    UserRole.destroy( {
        where: {
            UserRoleId: id
        }
    })
    .then(userrole => {
        if(userrole === 0){
            res.status(401).send({
                Code : 0,
                Response: 'El rol de usuario ' + id + ' no se encuentra registrado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El rol de usuario ' + id + ' fue eliminado de manera exitosa'
            })
        }
    })
    .catch(error =>
        res.status(500).send({
            Code : 0,
            Response: error
        })
    );
}

module.exports = {
    createUserRole,
    getUserRole,
    getUserRoleById,
    editUserRole,
    deleteUserRole
}