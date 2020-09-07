database = require('../database.js')
const identificationKey = 'email'

class UserModel {
    constructor() {
    }

    checkLogin(req, response) {
        database.query(`select email from "user" where  is_admin = TRUE 
        and email=${req.obj[identificationKey]} and password = ${req.obj['password']}`, (err, res) => {
            console.log(response)
            response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
            if (!res.rowCount) {
                response.end('true');
                console.log("you can login ")
            } else {
                response.end('false');
                console.log('you cant login')
            }
        })
    }

    insertRow(req, response) {
        database.query(`INSERT INTO "user" (password, email, name, answer_security, remember_me ,is_admin) 
        VALUES ('${req.obj['password']}','${req.obj['email']}', '${req.obj['name']}',
         '${req.obj['answer_security']}','${req.obj['remember_me']}' ,'${req.obj['is_admin']}');`, (err, res) => {
            console.log(res)
            response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
            response.end('admin is added');

        })
    }

    changePassword(req, response) {
        database.query(`select email from "user" where  is_admin = TRUE  and email='${req.obj['email']}';`, (err, res) => {
            console.log(res)
            response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
            if (!res.rowCount) {
                console.log("you can change ")
                database.query(`update "user" set password  ='${req.obj['password']}' where  is_admin = false and email ='${req.obj['email']}'; `, (err, res) => {
                    console.log('password is changed')
                    response.end('password is changed');

                })
            } else {
                console.log('you cant change')
                response.end('user not found');

            }

        })
    }


}

module.exports = UserModel