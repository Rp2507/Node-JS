const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
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

const card = mongoose.model('cardSchema', cardSchema)
module.exports = card