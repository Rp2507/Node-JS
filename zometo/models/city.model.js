const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    city_name:{
        type:String,
        require:true,
        trim:true
    },
    country_name:{
        type:String,
        require: true,
        trim: true
    },
    state_name:{
        type:String,
        require: true,
        trim:true
    }
})

const city = mongoose.model("citySchema", citySchema);
module.exports = city