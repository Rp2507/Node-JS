const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    role: {
        type: String,
        require: true,
        enum: ['admin', 'user']
    }
})

const admin = mongoose.model('adminSchema', adminSchema)
module.exports = admin