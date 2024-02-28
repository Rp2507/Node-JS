const express = require('express')
const { adminController } = require('../controller')
const route = express.Router()

route.post('/add',adminController.addAdmin)
route.get('/get', adminController.getAdmin)

module.exports = route