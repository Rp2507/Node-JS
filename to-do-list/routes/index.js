const express = require('express')
const routes = express.Router()
const userRoute = require('./user.route')
const todoRoute = require('./todo.route')

routes.use('/user', userRoute)
routes.use('/todo', todoRoute)

module.exports = routes