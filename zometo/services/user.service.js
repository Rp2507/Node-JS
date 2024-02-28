const { userSchema } = require("../models")

const addUser = (body) => {
    return userSchema.create(body)
}

const getUser = () => {
    return userSchema.find()
}

module.exports = {addUser , getUser}