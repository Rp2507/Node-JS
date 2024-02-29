const { bookService } = require("../service");

const addBook = async (req, res) =>{
    console.log(req.body);

    try{
        let body = req.body

        let books = await bookService.addBokk(body)

        if(!books){
            throw new Error('boos is not added')
        }

        res.status(201).json({
            message: "book added successfully",
            books
        })

    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

const getBooks = async (req, res) => {
    try{
        let books = await bookService.getBooks()

        if(!books){
            throw new Error('books not found')
        }
        res.status(200).json({
            message: 'Books get sucessfilly', books
        })
    }catch(err){
        res.status(400).json({success: false,
        err: err.message})
    }
}

module.exports= { addBook, getBooks }