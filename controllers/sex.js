const { Sequelize, DataTypes, Op } = require('sequelize');

const Sex = require('../models/Sex')

function createSex(req, res){
    var body = req.body;
    console.log(body);
    Sex.create(body)
    .then(sex =>
        res.status(201).send({
            Code : 1,
            Response: 'El sexo fue creado de manera exitosa'
        }))
    .catch(error =>
        res.status(500).send({
            Code: 0,
            Response: error
        }));
}

function getSex(req, res){
    // Hace una consulta en la base de datos.
    Sex.findAll().then(sex => {
        return res.json(sex)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function getSexById(req, res){
    var body = req.body;
    var id = req.params.id;

    // Hace una consulta en la base de datos.
    Sex.findAll({
        where: {
            SexId: id
        }
    }).then(sex => {
        return res.json(sex)
    }).catch(error => {
        return res.sendStatus(401)
    })
}

function editSex(req, res){
    var body = req.body;
    Sex.update(body, {
        where: {
            SexId : body.SexId
        }
    })
    .then(sex =>{
        console.log(sex[0]);
        if(sex[0] == 0){
            res.status(401).send({
                Code : 0,
                Response: 'El sexo ' + body.SexId + ' no se encuentra registrado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El sexo ' + body.SexId + ' fue actualizado de manera exitosa',
                Sex: req.body
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

function deleteSex(req, res){
    var id = req.params.id;
    Sex.destroy( {
        where: {
            SexId: id
        }
    })
    .then(sex => {
        if(sex === 0){
            res.status(401).send({
                Code : 0,
                Response: 'El sexo ' + id + ' no se encuentra registrado.'
            })
        }
        else{
            res.status(201).send({
                Code : 1,
                Response: 'El sexo ' + id + ' fue eliminado de manera exitosa'
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
    createSex,
    getSex,
    getSexById,
    editSex,
    deleteSex
}