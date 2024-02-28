const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    bookID:{
        type: String
    }
})

const author = mongoose.model('authorSchema', authorSchema)
module.exports = author