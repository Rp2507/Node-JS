const express = require('express')
const { toDoController } = require('../controller')
const validate = require('../middlewares/validate')
const { toDoValidation } = require('../validation')
const route = express.Router()

route.post('/add', validate(toDoValidation.toDO),toDoController.addtodo)
route.get('/get', toDoController.getToDo)
route.get('/getUser/:id',toDoController.getUserToDo)
route.delete('/delete/:id', toDoController.deleteToDo)
route.put('/update/:id', validate(toDoValidation.toDO) ,toDoController.updateToDo)

module.exports=route