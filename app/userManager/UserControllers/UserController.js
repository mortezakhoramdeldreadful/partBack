const UserModel = require('../UserModels/UserModel')
let model = new UserModel()

class UserController {
    constructor() {
    }

    login(req, res) {
        model.checkLogin(req, res)

    }

    signUp(req, res) {
        model.insertRow(req, res)
    }


    forgotPassword(req, res) {
        model.changePassword(req, res)
    }

}

module.exports = UserController