const express = require('express')
const { categorieController } = require('../controller')
const route = express.Router()

route.post('/add', categorieController.addCategorie)
route.get('/get' , categorieController.getCategorie)

module.exports = route
