const UserController = require('./UserControllers/UserController')
let controller = new UserController()
module.exports =
    {
        '/user/login': {
            POST: controller.login,
        },
        '/user/signUp': {
            POST: controller.signUp,
        },
        '/user/forgotPassword': {
            POST: controller.forgotPassword,
        }
    }

