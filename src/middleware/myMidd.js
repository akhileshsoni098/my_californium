const jwt= require("jsonwebtoken");

let mid = function(req,res,next){

let token = req.headers["x-auth-token"]

if(!token) return res.send({msg: "token is needed"})

let decodedToken = jwt.verify(token, "functionUp-akhilesh")

if(!decodedToken) return ({msg: "token is invailed"})

next()
}
// ===========================================================================================
// midd2 for authorization of a user 


let midd2 = function(req , res , next){

let token = req.headers["x-auth-token"]

if(!token) return res.send({msg: "token is needed"})

let decodedtoken = jwt.verify(token,"functionUp-akhilesh")

if(!decodedtoken) return ({msg: "token is invailed"})

let userToBeModified = req.params.userId

let userLoggedIn = decodedtoken.userId

if(userToBeModified !=userLoggedIn) return res.send({msg:"invaild token or User Id "})

next()

}


module.exports.midd2 = midd2

module.exports.mid = mid