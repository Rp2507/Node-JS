const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
})

const user = new mongoose.model('userSchema',userSchema)
module.exports = user