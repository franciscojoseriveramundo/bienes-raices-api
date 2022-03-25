const { Sequelize, DataTypes, Op } = require('sequelize');

const TypeContact = require('../models/TypeContact')

function createTypeContact(req, res){
    var body = req.body;
    console.log(body);
    TypeContact.create(body)
    .then(typeContact =>
        res.status(201).send({
            Code : 1,
            Response: 'El medio de contacto fue creado de manera exitosa'
        }))
    .catch(error =>
        res.status(500).send({
            Code: 0,
            Response: error
        }));
}

function getTypeContact(req, res){
    // Hace una consulta en la base de datos.
    TypeContact.findAll().then(typeContact => {
        return res.json(typeContact)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function getTypeContactById(req, res){
    var body = req.body;
    var id = req.params.id;

    // Hace una consulta en la base de datos.
    TypeContact.findAll({
        where: {
            TypeContactId: id
        }
    }).then(typeContact => {
        return res.json(typeContact)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function editTypeContact(req, res){
    var body = req.body;
    TypeContact.update(body, {
        where: {
            TypeContactId : body.TypeContactId
        }
    })
    .then(typeContact =>{
        console.log(typeContact[0]);
        if(typeContact[0] == 0){
            res.status(401).send({
                Code : 0,
                Response: 'El medio de contacto ' + body.TypeContactId + ' no fue actualizado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El medio de contacto ' + body.TypeContactId + ' fue actualizado de manera exitosa',
                TypeContact: req.body
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

function deleteTypeContact(req, res){
    var id = req.params.id;
    TypeContact.destroy( {
        where: {
            TypeContactId: id
        }
    })
    .then(typeContact => {
        if(typeContact === 0){
            res.status(401).send({
                Code : 0,
                Response: 'El medio de contacto ' + id + ' no se encuentra registrado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El medio de contacto ' + id + ' fue eliminado de manera exitosa'
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
    createTypeContact,
    getTypeContact,
    getTypeContactById,
    editTypeContact,
    deleteTypeContact
}