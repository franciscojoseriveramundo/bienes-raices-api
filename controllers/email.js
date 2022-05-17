// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
//const sequelize = require('../config/bdConection');
let mysql = require('mysql');
let config = require('../config/config.js');

function getLayout(req, res){
    var response = []; // Arreglo final de la respuesta de codigo 200.

    //Obtenemos el cuerpo de la solicitud
    var body = req.body;

    console.log(body);

    //Creamos la conexion de base de datos (mysql)
    let connection = mysql.createConnection(config);

    new Promise((resolve, reject) =>{

        //Consulta sql (stored procedure)
        let sql = `call usp_EmailLayout(?)`;

        connection.query(sql, [req.params.id], (error, results, fields) => {

            //En caso de error en la ejecución//
            if (error) {
                console.error(error.message);

                reject(res.status(500).send({
                    error
                }));
            }

            //Convertimos en arreglo los resultados de salida del stored procedure.
            const result = Object.values(JSON.parse(JSON.stringify(results[0])));

            //Itero el resultado y los agrego a la salida final
            result.forEach((v) => response.push(v));

            //Resultado de codigo 200 (correcto)
            resolve(res.status(201).send({
                response
            }));

        });
    });
}

function sendEmail(req, res){

    var response = []; // Arreglo final de la respuesta de codigo 200.

    //Obtenemos el cuerpo de la solicitud
    var body = req.body;

    console.log(body);

    new Promise((resolve, reject) =>{

        require('dotenv').config();

        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey("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")

        const msg = {
            to: body.EmailTo,
            from: process.env.EMAIL_FROM,
            subject: body.EmailSubject,
            html: body.EmailHTML,
        }

        sgMail.send(msg).then((resp) => {
            console.log("EmailSend");
            console.log(resp);
            resolve(res.status(201).send({
                response: {
                    Code: 1,
                    Message: "El correo electrónico ha sido enviado exitosamente."
                }
            }));
        })
        .catch((error) => {
            //console.error(error.response)
            console.log("Error");
            console.log(error);
            resolve(res.status(201).send({
                response: {
                    Code: 0,
                    Message: "El correo electrónico no fue enviado."
                }
            }));
        })
    });
}

module.exports = {
    getLayout,
    sendEmail
}