const express = require('express')
const { cityController } = require('../controller')
const route = express.Router()

route.post('/add',cityController.addCity)

module.exports = route