const express = require('express')
const routes = express.Router()
const adminRoute = require('./admin.route')
const authorRoute = require("./author.route")
const customerRoute = require('./customer.route')
const booksRoute = require('./books.route')

routes.use('/admin',adminRoute)
routes.use('/author', authorRoute)
routes.use('/customer', customerRoute)
routes.use('/book', booksRoute)

module.exports = routes