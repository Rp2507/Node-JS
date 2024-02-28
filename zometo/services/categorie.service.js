const { categorieSchema } = require("../models")

const addCategorie = (body) => {
    return categorieSchema.create(body)
}

const getCategorie = () => {
    return categorieSchema.find()
}

module.exports = {addCategorie , getCategorie}