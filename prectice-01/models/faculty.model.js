const mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim: true
    },
    password:{
        type: String,
        require:true,
        trim:true
    },
    role:{
        type: String,
        require: true,
        enum:['admin', 'student', 'faculty']
    }
})

const faculty = mongoose.model('facultySchema',facultySchema)
module.exports = faculty
