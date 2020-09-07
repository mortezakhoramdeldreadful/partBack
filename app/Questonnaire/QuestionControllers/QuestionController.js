const QuestionModel = require("../QuestionModels/QuestionModel");
let model = new QuestionModel()

class QuestionController {

    constructor() {
    }

    getAllQuestionnaire(req, res) {
        model.getAllQuestionnaire(req, res)

    }

    filter(req, res) {
        model.filterBy(req, res)
    }


    getQuestions(req, res) {
        model.getQuestionUser(req, res)
    }
    getNumQuestionnaire(req, res) {
        model.getNumQuestionnaire(req, res)

    }

}

module.exports =  QuestionController