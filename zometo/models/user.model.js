const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim: true
    },
    email:{
        type:String,
        require:true,
        trim: true
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    role:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require: true,
        trim: true
    }
})

const user = mongoose.model('userSchema', userSchema);
module.exports = user