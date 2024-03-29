const express = require('express')
const validate = require('../middlewares/validate')
const { bookValidation } = require('../validations')
const { booksController } = require('../controller')
const route = express.Router()

route.post('/add', validate(bookValidation.book), booksController.addBook)
route.get('/get', booksController.getBooks)
route.delete('/delete',booksController.deleteBook)
route.put('/update/:id',booksController.updateBook)

module.exports= route