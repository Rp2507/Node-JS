const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    // bookID:{
    //     type: String
    // },
    // authorID:{
    //     type: String
    // },
    title:{
        type: String
    },
    price:{
        type: Number
    },
    publisation_year:{
        type: Number
    }
})

const books = mongoose.model('bookSchema', bookSchema)
module.exports = books