const mongoose = require('mongoose')

const toDOSchema = new mongoose.Schema({
    taskName:{
        type: String
    },
    taskDetail:{
        type: String
    },
    taskStatus:{
        type: Boolean
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema'
    }
})

const toDO = new mongoose.model('toDOSchema', toDOSchema)
module.exports = toDO