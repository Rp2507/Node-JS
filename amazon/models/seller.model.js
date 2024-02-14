const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
        name:{
            type: String,
            require: true,
            trim: true
        },
        email:{
            type: String,
            require: true,
            trim: true
        },
        password:{
            type:String,
            require: true,
            trim: true
        },
        role:{
            type: String,
            require: true,
            enum:['seller', 'user']
        }
})

const seller = mongoose.model('sellerSchema', sellerSchema)
module.exports = seller