const express = require('express')
const { adminController } = require('../controller')
const route = express.Router()

route.post('/add',adminController.addAdmin)

module.exports = route