const { bookSchema } = require("../models")

// add book
const addBokk = (body) => {
    return bookSchema.create(body)
}

// get book
const getBooks = () => {
    return bookSchema.find()
}

// find book for delete
const findBookId = (id) => {
    return bookSchema.findById(id)
}

// delete book
const deleteBook = (id) => {
    return bookSchema.findByIdAndDelete(id)
}

// update book
const updateBook = (body, id) => {
    return bookSchema.findByIdAndUpdate(id, {$set : body})
}

module.exports= {addBokk, getBooks, findBookId, deleteBook, updateBook}