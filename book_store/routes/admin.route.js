const express = require('express')
const { adminController } = require('../controller')
const { validate } = require('../models/admin.model')
const { adminValidation } = require('../validations')
const route = express.Router()

route.post('/add',validate(adminValidation.admin), adminController.addAdmin)

module.exports = route