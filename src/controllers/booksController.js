const bookDetails = require('../models/booksModel') 

const createBook = async function(req , res){
    let bookData = req.body
    let saveBooksData = await bookDetails.create(bookData)
    res.send({msg:saveBooksData})
}

const getBooksDetails = async function(req, res){
    let getBooksData =  await bookDetails.find()

    res.send({msg:getBooksData})
}

module.exports.createBook = createBook
module.exports.getBooksDetails = getBooksDetails