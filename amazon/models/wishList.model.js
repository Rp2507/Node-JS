const mongoose = require('mongoose')

const wishListSchema = new mongoose.Schema({
    product_name: {
        type: String,
        require: true,
        trim: true
    },
    brand: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        require: true,
        trim: true
    }
})

const wishList = mongoose.model('wishListSchema', wishListSchema)
module.exports = wishList