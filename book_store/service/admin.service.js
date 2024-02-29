const { adminSchema } = require("../models")

// create admin
const addAdmin = (body) => {
    return adminSchema.create(body)
}

// check name
const findAdmin = (name) => {
    return adminSchema.findOne({name})
}

// chek email
const findEmail = (email) => {
    return adminSchema.findOne({ email })
}

// find admin for delete
const findAdminId = (id) => {
    return adminSchema.findById(id)
}

// delete admin
const deleteAdmin = (id) => {
    return adminSchema.findByIdAndDelete(id)
}

// get admin
const getAdmin = () => {
    return adminSchema.find()
}

module.exports = { addAdmin, findAdmin, findEmail , getAdmin , findAdminId, deleteAdmin}