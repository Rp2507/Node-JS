const { toDOSchema } = require("../models")

// add task
const addTodo = (body) => {
    return toDOSchema.create(body)
}

// get task
const getToDo = () => {
    return toDOSchema.find().populate('user')
}

// get user task
const getUserToDo = (id) => {
    return toDOSchema.find({user:{_id: id}}).populate('user')
}

// find task
const findTask = (id) => {
    return toDOSchema.findById(id)
}

// delete task
const deleteToDo = (id) => {
    return toDOSchema.findByIdAndDelete(id)
}

// update task
const updateToDo = (id, body)=> {
    return toDOSchema.findByIdAndUpdate(id, {$set: body})
}

module.exports = {addTodo, getToDo, getUserToDo, findTask, deleteToDo, updateToDo}