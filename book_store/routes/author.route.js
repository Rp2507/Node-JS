const express = require('express')
const { authorController } = require('../controller')
const validate = require('../middlewares/validate')
const { authorValidation } = require('../validations')
const route = express.Router()

route.post('/add', validate(authorValidation.author), authorController.addAuthor)
route.get('/get',authorController.getAuthor)

module.exports=route