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

// get admin
const getAdmin = () => {
    return adminSchema.find()
}

module.exports = { addAdmin, findAdmin, findEmail , getAdmin }