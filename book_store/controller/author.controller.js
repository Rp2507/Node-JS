const { authorService } = require("../service");

const addAuthor = async (req, res) =>{
    console.log(req.body);

    try{
        let body = req.body
        let authorExist = await authorService.findAuthor(req.body.firstName)

        if(authorExist){
            throw new Error ('author already exist')
        }

        let author = await authorService.addAuthor(body)
        if(!author){
            throw new Error('author not added')
        }

        res.status(201).json({
            message: "author added succesfully",
            author
        })
    } catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

const getAuthor = async (req, res) => {
    try{
        let author = await authorService.getAuthor()

        if(!author){
            throw new Error('author not found')
        }

        res.status(200).json({
            message: 'author get successfully', author
        })
    }catch(err){
        res.status(400).json({
            success: false,err: err.message
        })
    }
}

// delete author
const deleteAuthor = async (req,res) => {
    try{
        let {id} = req.params
        console.log(id);

        let authorExist = await authorService.findAuthorId(id)
        if(!authorExist){
            res.status(400).json({
                message: 'author not found'
            })
        }

        let author = await authorService.deleteAuthor(id)
        res.status(200).json({
            message: 'author delete success', author
        })

    }catch(err){
        console.log(err);
    }
}

module.exports = { addAuthor, getAuthor, deleteAuthor }