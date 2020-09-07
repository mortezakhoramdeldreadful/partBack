database = require('../database.js')
const identificationKey = 'email'

class QuestionModel {

    constructor() {

    }

    getAllQuestionnaire(req, response) {

        database.query(`select q.title,q.option_number, q.count_questions, q.status from map inner join 
        questionnaire q on map.id_questionnaire =
        q.id inner join "user" u on map.id_user =
        u.id`, (err, res) => {
            console.log(res.rows, err)
            response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
            response.end(JSON.stringify(res.rows));
        })
    }

    filterBy(req, response) {
        database.query(`select q.${req.obj['filter']}
         from map inner join questionnaire q on 
         map.id_questionnaire = q.id inner join "user" u on map.id_user =
         u.id  where u.email = ${req.obj[identificationKey]} `
            , (err, res) => {
                console.log(res)
                response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
                response.end(JSON.stringify(res.rows));
            })
    }

    getNumQuestionnaire(req, response) {
        database.query(`select count(q.id) from map inner join questionnaire q on map.id_questionnaire = q.id inner join "user" u on map.id_user = u.id
         where  not  u.is_admin`, (err, res) => {
            console.log(res.rows)
            response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
            response.end(JSON.stringify(res.rows));
        })
    }

    getQuestionUser(req, response) {
        database.query(`select q.text_question , q.option1 , q.option2, q.option3 , q.option4 
        from question q inner join questionnaire q2 on q.id_questionnaire = q2.id
        where q2.title = '${req.obj['title']}'`
            , (err, res) => {
                console.log(res)
                response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
                response.end(JSON.stringify(res.rows));
            })
    }

}

module.exports = QuestionModel