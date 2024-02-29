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

// find author for delete
const findAuthorId = (id) => {
    return authorSchema.findById(id)
}

// delete author
const deleteAuthor = (id) => {
    return authorSchema.findByIdAndDelete(id)
}

// update author
const updateAuthor = (body, id) => {
    return authorSchema.findByIdAndUpdate(id, {$set: body} )
}

module.exports = {addAuthor, findAuthor, getAuthor, findAuthorId, deleteAuthor, updateAuthor}