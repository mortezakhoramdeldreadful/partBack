const AdminModel =require('../AdminModels/AdminModel')
let model = new AdminModel()

class AdminController {
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

module.exports = AdminController