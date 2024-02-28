const { adminSchema } = require("../models")

const addAdmin = (body) => {
   return adminSchema.create(body)
}
const getAdmin = () => {
    return adminSchema.find()
}

module.exports= { addAdmin, getAdmin }