// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
//const sequelize = require('../config/bdConection');
let mysql = require('mysql');
let config = require('../config/config.js');

//Funcion que realiza el inicio de sesión en el aplicativo.
function getUserForLogin(req, res){

    var response = []; // Arreglo final de la respuesta de codigo 200.

    //Obtenemos el cuerpo de la solicitud
    var body = req.body;

    console.log(body);

    //Creamos la conexion de base de datos (mysql)
    let connection = mysql.createConnection(config);

    new Promise((resolve, reject) =>{

        //Consulta sql (stored procedure)
        let sql = `call usp_Login(?,?)`;

        connection.query(sql, [body.Useremail, body.Userpassword], (error, results, fields) => {

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

function createUser(req, res){
    var response = []; // Arreglo final de la respuesta de codigo 200.

    //Obtenemos el cuerpo de la solicitud
    var body = req.body;

    console.log(body);

    //Creamos la conexion de base de datos (mysql)
    let connection = mysql.createConnection(config);

    new Promise((resolve, reject) =>{

        //Consulta sql (stored procedure)
        let sql = `call usp_CreateUser(?,?,?,?,?,?,?,?)`;

        console.log("Que onda");

        connection.query(sql, [body.Username, body.UserLastName, body.UsersSex, body.UsersRoleId, body.UsersStatusId, body.UsersPassword, body.UsersEmail, body.UsersPhone], (error, results, fields) => {

            //En caso de error en la ejecución//
            if (error) {
                console.error(error.message);

                reject(res.status(500).send({
                    error
                }));
            }

            console.log(results);

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

function recoveryUser(req, res){
    var response = []; // Arreglo final de la respuesta de codigo 200.

    //Obtenemos el cuerpo de la solicitud
    var body = req.body;

    console.log(body);

    //Creamos la conexion de base de datos (mysql)
    let connection = mysql.createConnection(config);

    new Promise((resolve, reject) =>{

        //Consulta sql (stored procedure)
        let sql = `call usp_RecoveryUser(?)`;

        connection.query(sql, [body.UsersEmail], (error, results, fields) => {

            //En caso de error en la ejecución//
            if (error) {
                console.error(error.message);

                reject(res.status(500).send({
                    error
                }));
            }

            console.log(results);

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

module.exports = {
    getUserForLogin,
    createUser,
    recoveryUser
}