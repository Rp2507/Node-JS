const { customerSchema } = require("../models")

// add
const addCustomer = (body) => {
    return customerSchema.create(body)
}

const findCustomer = (mobile) => {
    return customerSchema.findOne({mobile})
}

const getCustomer = () => {
    return customerSchema.find()
}

// find cus for delete
const findCustomerId = (id) => {
    return customerSchema.findById(id)
}

// delete cus
const deleteCustomer = (id) => {
    return customerSchema.findByIdAndDelete(id)
}

module.exports = { addCustomer, findCustomer, getCustomer, findCustomerId, deleteCustomer }