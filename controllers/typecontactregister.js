const { Sequelize, DataTypes, Op } = require('sequelize');

const TypeContactRegister = require('../models/TypeContactRegister')

function createTypeContactRegister(req, res){
    var body = req.body;
    console.log(body);
    TypeContactRegister.create(body)
    .then(TypeContactRegister =>
        res.status(201).send({
            Code : 1,
            Response: 'El tipo de contacto registrado fue creado de manera exitosa'
        }))
    .catch(error =>
        res.status(500).send({
            Code: 0,
            Response: error
        }));
}

function getTypeContactRegister(req, res){
    // Hace una consulta en la base de datos.
    TypeContactRegister.findAll().then(typeContactRegister => {
        return res.json(typeContactRegister)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function getTypeContactRegisterById(req, res){
    var body = req.body;
    var id = req.params.id;

    // Hace una consulta en la base de datos.
    TypeContactRegister.findAll({
        where: {
            TypeContactRegisterId: id
        }
    }).then(typeContactRegister => {
        return res.json(typeContactRegister)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function editTypeContactRegister(req, res){
    var body = req.body;
    TypeContactRegister.update(body, {
        where: {
            TypeContactRegisterId : body.TypeContactRegisterId
        }
    })
    .then(typeContactRegister =>{
        console.log(typeContactRegister[0]);
        if(typeContactRegister[0] == 0){
            res.status(401).send({
                Code : 0,
                Response: 'El tipo de contacto registrado ' + body.TypeContactRegisterId + ' no fue actualizado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El tipo de contacto registrado ' + body.TypeContactRegisterId + ' fue actualizado de manera exitosa',
                TypeContactRegister: req.body
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

function deleteTypeContactRegister(req, res){
    var id = req.params.id;
    TypeContactRegister.destroy( {
        where: {
            TypeContactRegisterId: id
        }
    })
    .then(typeContactRegister => {
        if(typeContactRegister === 0){
            res.status(401).send({
                Code : 0,
                Response: 'El tipo de contacto registrado ' + id + ' no se encuentra registrado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El tipo de contacto registrado ' + id + ' fue eliminado de manera exitosa'
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
    createTypeContactRegister,
    getTypeContactRegister,
    getTypeContactRegisterById,
    editTypeContactRegister,
    deleteTypeContactRegister
}