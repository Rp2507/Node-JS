const mongoose = require('mongoose')

const dbConnect =() =>{
    mongoose.connect('mongodb://127.0.0.1:27017/toDOlistApi').then(() =>{
        console.log('db connected');
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = dbConnect