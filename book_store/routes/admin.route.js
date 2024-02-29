const express = require('express')
const { adminController } = require('../controller')
const { adminValidation } = require('../validations')
const validate = require('../middlewares/validate')
const route = express.Router()

route.post('/add',validate(adminValidation.admin), adminController.addAdmin)
route.get('/get', adminController.getAdmin)

module.exports = route