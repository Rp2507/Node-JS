const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        require: true,
        trim: true
    },
    brand:{
        type:String,
        require: true,
        trim: true
    },
    price:{
        type: Number,
        require: true,
        trim: true
    }
})

const product = mongoose.model('productSchema', productSchema)
module.exports = product