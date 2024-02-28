const express = require('express')
const routes = express.Router()
const adminRoute = require('./admin.route')
const userRoute = require('./user.route')
const categorie = require('./categorie.route')
const foodItem = require('./foodItem.route')
const cityRoute = require('./city.route')

routes.use('/admin',adminRoute)
routes.use('/user',userRoute)
routes.use('/categorie',categorie)
// routes.use('/foodItem',foodItem)
routes.use('/city',cityRoute)

module.exports=routes