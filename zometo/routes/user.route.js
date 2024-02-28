const express = require('express')
const { userController } = require('../controller')
const route = express.Router()

route.post('/add',userController.addUser)
route.get('/get', userController.getUser)

module.exports = route