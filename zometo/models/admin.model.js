const mongoose = require('mongoose')

const admineSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type:String,
        require: true,
        trim: true
    },
    password:{
        type:String,
        require:true,
        trim: true
    },
    role:{
        type: String,
        require: true,
        enum: ['admin' , 'user'],
        default: 'user'
    }
})

const admin = mongoose.model('adminSchema', admineSchema)
module.exports = admin