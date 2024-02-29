const { customerSchema } = require("../models")

const addCustomer = (body) => {
    return customerSchema.create(body)
}

const findCustomer = (mobile) => {
    return customerSchema.findOne({mobile})
}

const getCustomer = () => {
    return customerSchema.find()
}

module.exports = { addCustomer, findCustomer, getCustomer }