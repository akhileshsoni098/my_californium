const express = require('express');
const router = express.Router();
const intro = require('./introduction') 
const employee = require('./employee')  
const _ = require('underscore')  
const welc = require('../logger/logger')
const day = require('../validator/formatter')
const help =require('../util/helper')
const _a= require("lodash") 



router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

//created by me 

let arr = ['January','February','March','April','May','June','July','August','September','October','November','December']
console.log(_a.chunk(arr, 3))
  
let arr2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
let newArray = _a.tail(arr2);
console.log(newArray);

let g = _a.union([1, 2, 3],
    [3, 4, 5], 
    [6, 2, 7]); 
console.log(g)

let pairs = [
    ["horror", "The Shining"], 
    ["drama", "Titanic"], 
    ["thriller", "Shutter Island"],
    ["fantasy","Pans Labyrinth"]
]
let obj = _a.fromPairs(pairs)
  
console.log(obj)

     day.today()
     welc.wel('Akhilesh Soni')
,   help.hardcoded()

//created by me...
    
    // console.log(`Result from underscore function is ${result}`)

    res.send('Hello World! here i am "AKHILESH SONI" learning something exciting... ')

});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;