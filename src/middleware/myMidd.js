const jwt= require("jsonwebtoken");

// here user has complete authority can access anything // 

let mid = function(req,res,next){
try{
let token = req.headers["x-auth-token"]

if(!token) return res.status(401).send({msg: "token is needed"})

let decodedToken = jwt.verify(token, "functionUp-akhilesh")

if(!decodedToken) return res.status(401).send({msg: "token is invailed"})

next()
} catch(err){
    res.send(500).send({error: err.message})
}
}

// ===========================================================================================


// midd2 for authorization of a user 


let midd2 = function(req , res , next){

    try{

let token = req.headers["x-auth-token"]

if(!token)  res.status(401).send({msg: "token is needed"})

let decodedtoken = jwt.verify(token,"functionUp-akhilesh")

if(!decodedtoken) res.status(401).send({msg: "token is invailed"})

let userToBeModified = req.params.userId

let userLoggedIn = decodedtoken.userId

if(userToBeModified !=userLoggedIn)

 return res.status(403).send({msg:"invaild token or User Id "})

next()
    } catch(err){

        res.status(500).send({err:err.message})
        
    }
}


module.exports.midd2 = midd2

module.exports.mid = mid