const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    food_name:{
        type:String,
        require:true,
        trim:true
    },
    food_type:{
        type:String,
        require: true,
        enum: ['veg' , 'non-veg']
    }
})

const foodItem = mongoose.model('foodItemSchema', foodItemSchema)
module.exports = foodItem