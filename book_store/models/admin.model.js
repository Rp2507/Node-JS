const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String
    }
})

const admin = mongoose.model('adminSchema' , adminSchema)
module.exports = admin