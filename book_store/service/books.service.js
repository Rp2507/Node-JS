const { bookSchema } = require("../models")

const addBokk = (body) => {
    return bookSchema.create(body)
}

const getBooks = () => {
    return bookSchema.find()
}

module.exports= {addBokk, getBooks}