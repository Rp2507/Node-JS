const { authorSchema } = require("../models")

const addAuthor = (body) => {
    return authorSchema.create(body)
}

const findAuthor = (firstName) => {
    console.log(firstName);
    return authorSchema.findOne({firstName})
}

// get author
const getAuthor = () => {
    return authorSchema.find()
}

module.exports = {addAuthor, findAuthor, getAuthor}