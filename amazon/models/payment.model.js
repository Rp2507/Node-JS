const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    card_method:{
        type: String,
        require: true,
    },
    card_number:{
        type: Number,
        require: true,
        trim: true
    },
    password:{
        type:String,
        require:true,
        trim: true
    }
})

const payment = mongoose.model('paymentSchema', paymentSchema)
module.exports = payment
