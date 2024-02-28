const { citySchema } = require("../models")

const addCity = (body) => {
    return citySchema.create(body)
}

module.exports = { addCity }