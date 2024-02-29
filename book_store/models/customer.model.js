const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerName :{
        type: String
    },
    address:{
        type: String
    },
    postel_code:{
        type: Number
    },
    country:{
        type:String
    },
    mobile:{
        type: String
    }
})

const customer = mongoose.model('customerSchema', customerSchema)
module.exports = customer