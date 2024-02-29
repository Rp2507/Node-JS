const express = require('express')
const validate = require('../middlewares/validate')
const { customerValidation } = require('../validations')
const { customerController } = require('../controller')
const route = express.Router()

route.post('/add',validate(customerValidation.customer), customerController.addCustomer)
route.get('/get', customerController.getCustomer)

module.exports = route