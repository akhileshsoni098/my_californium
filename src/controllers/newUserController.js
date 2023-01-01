const userModel = require('../models/newUserModel')



const createUser = async function (req,res){
    
    let appHeader = req.headers["isFreeAppUser"]
    if (!appHeader) appHeader = req.headers["isfreeappuser"]
    // agr ye appHeader camel me nhi h toh lower me check kro agr nhi h toh aage...
if(!appHeader) return res.send({status:false, msg:" headers is mandatory"})
//todo: use the header value to assign isFreeAppUser property in user document been created

let userData = req.body

if(appHeader =="true"){

    userData.isFreeAppUser = true
}else {
    userData.isFreeAppUser = false
} 

const saveUser = await userModel.create(userData)

res.send({msg:saveUser})
}

module.exports.createUser= createUser
