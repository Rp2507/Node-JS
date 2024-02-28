const { adminSchema } = require("../models")

const addAdmin = (body) => {
    return adminSchema.create(body)
}

const findAdmin = (name) => {
    return adminSchema.findOne({name})
}

module.exports = { addAdmin, findAdmin }