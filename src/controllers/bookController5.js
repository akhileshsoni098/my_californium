
const BookModel = require('../models/bookModel')

const createBook = async (req, res)=>{
let bookStores = req.body
let saveBook = await BookModel.create(bookStores)
    res.send({msg: saveBook})
}


// ● bookList : gives all the books- their bookName and authorName only 

const selectBook = async (req, res)=>{

    let showDetails = await BookModel.find().select({bookName: 12, authorName: 12, _id :0})
    
res.send({msg: showDetails})
}


//     ● getBooksInYear: takes year as input in post request and gives list of all books published
//     that year

const selectYear = async (req, res) =>{
    let yearKey = req.query.year
let findYear = await BookModel.find({year: yearKey})
res.send({msg:findYear})
}


// ● getParticularBooks:-  take any input
//     and use it as a condition to fetch books that satisfy that condition
//     ○ e.g if body had { name: “hi”} then you would fetch the books with this name
//     ○ if body had { year: 2020} then you would fetch the books with this name
//     ○ hence the condition will differ based on what you input in the request body

const getSelectedDetails = async (req, res)=>{
    let selectedDetails = await BookModel.find(req.body)
    res.send({msg:selectedDetails })
}



//     ● getXINRBooks- request to return all books who have an Indian price tag of “100INR” or
//     “200INR” or “500INR”

const getInr = async (req, res)=>{
let getRup= await BookModel.find({"price.indianRupee":{ $in: ["100INR","200INR","500INR"] }})
res.send({msg:getRup})
}



//     ● getRandomBooks - returns books that are available in stock or have more than 500 page

const getRandom = async (req, res)=>{

    let randoms = await BookModel.find({$or: [{stockAvailable:true}, {totalPages:{$gt:500}}] })

    res.send({msg:randoms})
}

// module.exports = {createBook,selectBook,selectYear,getSelectedDetails,getInr, getRandom }

 module.exports.createBook = createBook
 module.exports. bookList = selectBook
 module.exports.getBooksInYear = selectYear

 module.exports.getParticularBooks = getSelectedDetails
 module.exports.getXINRBooks = getInr
 module.exports.getRandomBooks = getRandom
 