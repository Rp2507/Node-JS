const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        require: true,
        enum: ['male', 'female' , 'other']
    },
    course: {
        type: String
    },
    role:{
        type:String,
        require: true,
        enum: ['admin', 'student', 'faculty']
    }
})

const student = mongoose.model('studentSchema', studentSchema)
module.exports = student