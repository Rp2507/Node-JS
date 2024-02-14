const express = require('express')
const routes = express.Router()
const adminRoute = require('./admin.route')

routes.use('/admin',adminRoute)

module.exports = routes