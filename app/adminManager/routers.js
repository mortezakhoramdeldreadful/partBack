const AdminController = require('./AdminControllers/AdminController')
let controller = new AdminController()
module.exports =
    {
        '/admin/login': {
            POST: controller.login,
        },
        '/admin/signUp': {
            POST: controller.signUp,
        },
        '/admin/forgotPassword': {
            POST: controller.forgotPassword,
        }

    }
