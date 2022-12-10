const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore');
const { object } = require('underscore');

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)


    res.send('any dummy text')
});
// **1 
// Create an API for GET /movies that returns a list of movies. 
// Define an array of movies in your code and return the value in response.
	

router.get('/movies', function(req, res){
   
console.log("here someone request for movies ..")
    res.send(['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'])
})
// **2	
// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and 
// it should return the movie in your array
//  at index 1). You can define an array of movies again in your api


// [‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]


router.get('/movies/:indexNumber', function(req, res){

   let arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   let movi = arr[req.params.indexNumber]
        res.send(movi)
    })
// **3
// Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells
//  the user to use a valid index in an error message.

    router.get('/movie/:indexNum', function(req, res){
        let arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
       let a = req.params.indexNum
        let movi = arr[a]
        if(a<=arr.length-1){
             return res.send(movi)
        }else {
            return res.send("Please use a valid Number")
        }
         })
// ***4
/*
Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
[ {
 “id”: 1,
 “name”: “The Shining”
}, {
 “id”: 2,
 “name”: “Incendies”
}, {
 “id”: 3,
 “name”: “Rang de Basanti”
}, {
 “id”: 4,
 “name”: “Finding Nemo”
}]

Return the entire array in this api’s response

*/


router.get('/flims', function(req, res){

    let obj = [ {
        id: 1,
        name:" The Shining"
       },
        {
        id: 2,
        name: "Incendies"
       },
       {
        id: 3,
        name: "Rang de Basanti"
       }, 
       {
        id: 4,
        name: "Finding Nemo"
       }]
       
res.send(obj)
})

// **5
/*
Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
{
 “id”: 3,
 “name”: “Rang de Basanti”
}
Similarly for a request 
GET /films/9 the response can be something like - ‘No movie exists with this id’
*/

router.get('/flims/:flimId', function(req, res){
let flim = req.params.flimId
    let obj = [ {

        id: 1,
        name:" The Shining"
       },
        {
        id: 2,
        name: "Incendies"
       },
       {
        id: 3,
        name: "Rang de Basanti"
       }, 
       {
        id: 4,
        name: "Finding Nemo"
       }]
       
       for(let i = 0; i<obj.length; i++){
        if (flim==obj[i].id){
            return res.send(obj[i])
        }
           
        
    } return res.send("No movie exists with this id")

})

module.exports = router;