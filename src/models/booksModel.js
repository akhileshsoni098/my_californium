const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({

    // Create a bookSchema with bookName, authorName, category and year . 
    // Create same 2 api's for books i.e. : 1 api to create a new book and another 
    // api to get the list of all books. 

bookName: String,
authorName: String,
category: String,
year: Number

},  {timestamps: true})

module.exports = mongoose.model('Book', booksSchema)
