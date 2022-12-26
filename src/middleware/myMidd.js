const jwt = require('jsonwebtoken')


let mid = function(req,res,next){

let token = req.headers["x-auth-token"]

if(!token) return res.send({msg: "token is needed"})

let decodedToken = jwt.verify(token, "functionUp-akhilesh")

if(!decodedToken) return ({msg: "token is invailed"})
next()

}

module.exports.mid = mid