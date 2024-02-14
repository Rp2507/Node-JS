const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        trim : true
    },
    menuItems:{
        type:String,
        require: true,
        trim:true
    },
    description:{
        type: String,
        require:true,
        trim:true
    }
})

const categories = mongoose.model( 'categoriesSchema', categoriesSchema)
module.exports = categories