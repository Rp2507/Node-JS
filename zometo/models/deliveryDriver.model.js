const mongoose = require('mongoose')

const deliveryDriverSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    vehicle_number: {
        type: String,
        require: true,
        trim: true
    },
    license_number: {
        type: String,
        require: true,
        trim: true,
    },
})

const deliveryDriver = mongoose.model('deliveryDriverSchema', deliveryDriverSchema);
module.exports = deliveryDriver