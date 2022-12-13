const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

//    let obj = {
//     "name" : "akj",
//      "dob": "01/03/1999",
//      "gender" : "male",
//      "city": "json",
//      "sports": ["football"]
//     }
   
//     function func (players){
//        let count = 0
//        for(let i =0; i<players.length; i++){
//            if(players[i].name == obj.name){
//            count++
//        }
//     } if(count==0){
//        players.push(obj)
//     }return players
//    }
    
//     console.log(func(players))

router.post('/players', function(req, res){
   let newObj = req.body
   for(let i=0; i<players.length; i++){
     if(players[i].name == newObj.name){
       return res.send(`Dear User Your Name Is Already Exist`)
     }  
        } players.push(newObj)

         res.send({data: players , status: true})
    })

    



module.exports = router;