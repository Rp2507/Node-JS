const { bookService } = require("../service");

// add book
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

// get book
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

// delete book
const deleteBook = async( req, res ) =>{
    try{

        let {id} = req.params
        console.log(id);

        let bookExist = await bookService.findBookId(id)
        if(!bookExist){
            res.status(400).json({message: 'books not found'})
        }

        let book = await bookService.deleteBook(id)
        res.status(200).json({
            message: 'book delete success', book
        })

    }catch(err){
        console.log(err);
    }
}

module.exports= { addBook, getBooks, deleteBook }