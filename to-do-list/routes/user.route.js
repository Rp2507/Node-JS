const express = require('express')
const { userController } = require('../controller')
const validate = require('../middlewares/validate')
const { userValidation } = require('../validation')
const route = express.Router()

route.post('/add',validate(userValidation.user) , userController.addUser)
route.get('/get', userController.getUser)
route.delete('/delete/:id', userController.deleteUser)
route.put('/put/:id',validate(userValidation.user),userController.updateUser)

module.exports = route