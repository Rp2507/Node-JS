const { toDOService } = require("../services")

// add task
const addtodo = async (req, res) => {
    try{
        const body = req.body

        if(!body){
            throw new Error('daata not get')
        }

        const todo = await toDOService.addTodo(body)

        if(!todo){
            throw new Error('task not created')
        }

        res.status(201).json({
            message: ' task added successfully',
            todo
        })
    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

// get task
const getToDo = async (req, res) => {
    try{
        let toDo = await toDOService.getToDo();
        if(!toDo){
            throw new Error("task not Found");
        }
        res.status(200).json({
            message: 'data get successfully',
            toDo
        })
    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

// get user task
const getUserToDo = async (req, res) => {
    try{
        let {id} = req.params

        if(!id){
            throw new Error('id not get')
        }

        let user = await toDOService.getUserToDo(id)
        console.log(user, 'user task');

        if(!user){
            throw new Error('user task not found')
        }

        res.status(200).json({
            message: 'user task get successfully',
            data: user
        })

    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

// delete task
const deleteToDo = async (req, res) => {
    try{
        let {id} = req.params

        if(!id){
            throw new Error('id not get')
        }

        const toDOExist = await toDOService.findTask(id)

        if(!toDOExist){
            throw  new Error('task not found')
        }

        const toDO = await toDOService.deleteToDo(id)
        if(!toDO){
            throw new Error('task not deleted')
        }

        res.status(200).json({
            message: 'task deleted successfully',
            toDO
        })
    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

// update task
const updateToDo = async (req, res) => {
    try{
        const body = req.body;
        const {id} = req.params;

        const toDOExist = await toDOService.findTask(id)

        if(!toDOExist){
            throw new Error('task not found')
        }

        const toDo = await toDOService.updateToDo(id, body)

        if(!toDo){
            throw new Error('task not update')
        }

        res.status(200).json({
            message: 'task update successfully',
            toDo
        })
    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

module.exports = {addtodo, getToDo, getUserToDo, deleteToDo, updateToDo}