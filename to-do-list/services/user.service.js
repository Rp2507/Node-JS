const { userSchema } = require("../models")

// find email
const findUserEmail = (email) => {
    return userSchema.findOne({email}) 
}

// add user
const addUser = (body) => {
    return userSchema.create(body)
}

// get user
const getUser = () =>{
    return userSchema.find()
}

// find user for delete
const findUser = (id) => {
    return userSchema.findById(id)
}

// delete user
const deleteUser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

// update user
const updateUser = (body, id)=>{
    return userSchema.findByIdAndUpdate(id,{ $set: body})
}

module.exports = {findUserEmail , addUser, getUser, findUser, deleteUser, updateUser}