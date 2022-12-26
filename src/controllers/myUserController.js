const User = require('../models/myUserModel')
const createUser = async function(req, res){
let userDetails = req.body
let saveData = await User.create(userDetails)

res.send({status:true, msg : saveData})
}


const userLogin=async function(req,res){

    let data=req.body;
    let email=data.emailId;
    let password=data.password;

    const user= await userModel.findOne({emailId:email,password:password})
    if(!user) { res.send({mas:"incorrect user Name or passward"})}
    
    let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "californium",
          organisation: "FunctionUp",
        },
        "functionUp-akhilesh"
      );
      res.send({status:true, token:token})
}
 const getUser=async function (req,res){
  let userId = req.params.userId;
   
    let userData= await userModel.findById({_id:userId})
    if(!userData) {res.send({msg : "invalide user id "})}

    res.send({status:true, data:userData })

 }
 //-------------------------
 
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;

  let deleteUser = await userModel.findOneAndDelete({ _id: userId }, userData);
  res.send({ status:deleteUser, data: deleteUser });

};

module.exports.userLogin = userLogin;
module.exports.getUser=getUser;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
module.exports.createUser = createUser