const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema({
    name:{
        type:String,
        require: true,
        trim: true
    },
    type:{
        type: String,
        require: true,
        enum: ['veg', 'non-veg']
    }
})

const restaurant = mongoose.model('restaurantSchema', restaurantSchema);
module.exports = restaurant
