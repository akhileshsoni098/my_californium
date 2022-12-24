const userModel = require('../models/newUserModel')



const createUser = async function (req,res){
let userData = req.body
const saveUser = await userModel.create(userData)
res.send({msg:saveUser})
}
module.exports.createUser= createUser
