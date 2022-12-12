const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


router.get('/sol1', function(req, res){
    
 let arr= [1,2,3,5,6,7]
let sum = arr.length+1
let s = sum*(sum+1)/2
 let a = 0
 for(let i = 0; i<arr.length; i++){
a +=arr[i]
 }
let missingNumber = (s-a)

    res.send(`your missing number ${missingNumber} `)
})


router.get('/sol2', function(req, res){
   
 let arr= [33, 34, 35, 37, 38]
 // console.log(arr[arr.length-1])
  let sum = (arr.length+1)*(arr[0] + arr[arr.length-1])  //n(last +first)/2
 //  console.log(sum) 
  let s = sum/2
  let a = 0
 for(let i = 0; i<arr.length; i++){
 a += arr[i]
 }
  let missingNo = (s-a)
 
    res.send(`your missing number ${missingNo}`)
})


module.exports = router;