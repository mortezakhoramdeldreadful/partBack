const QuestionController = require('./QuestionControllers/QuestionController')
let controller = new QuestionController()
module.exports =
    {
        '/list_questionnaire/filter': {
            POST: controller.filter,
        },

        '/list_questionnaire/get_questionnaire': {
            GET: controller.getAllQuestionnaire,
        },

        '/list_questionnaire/get_questions': {
            POST: controller.getQuestions,
        },

        '/list_questionnaire/get_num_questionnaire': {
            GET: controller.getNumQuestionnaire,
        }

    }

