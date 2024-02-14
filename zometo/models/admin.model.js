const mongoose = require('mongoose')

const admineSchema = new mongoose.Schema({
    name:{
        type: string,
        require: true,
        trim: true
    },
    email:{
        type:string,
        require: true,
        trim: true
    },
    password:{
        type:string,
        require:true,
        trim: true
    },
    role:{
        type: string,
        require: true,
        enum: ['admin' , 'user']
    }
})

const admin = mongoose.model('adminSchema', admineSchema)
module.exports = admin