

const userModel = require('../models/myUserModel')

const jwt = require('jsonwebtoken')

// =====================================================================================================================
// - Write a **POST api /users** to register a user from the user details in request body.  

const createUser  = async function(req, res){
try{
let userDetails = req.body
if (Object.keys(userDetails.length!=0)){
let saveData = await userModel.create(userDetails)
res.status(201).send({status:true, msg : saveData})
}
} catch(err) {
  console.log("this is error:",err.message)
  res.status(500).send({error:err })
}
}

// throw and instenceOf finally
// =======================================================================================================================
// Write a ***POST api /login** to login a user that takes user details - email and password from the request body. If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it in response body.

const userLogin=async function(req,res){
  try{
    let data=req.body;
    let email=data.emailId;
    let password=data.password;

    const user= await userModel.findOne({emailId:email,password:password})

    if(!user) { res.status(400).send({mas:"incorrect emailId or passward"})}

    let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "californium",
          organisation: "FunctionUp",
        },
        "functionUp-akhilesh"
      );
      res.status(200).send({status:true, token:token})

}catch(err){
  console.log("this is error:", err.message)
  res.status(500).send({error:err})
  
}
}
// ===========================================================================================================================================
// Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url.

 const getUser=async function (req,res){
  
try{
  let userId = req.params.userId;
   
    let userData= await userModel.findById(userId)

    if(!userData) {res.status(400).send({msg : "invalide user id "})}

    res.status(200).send({status:true, data:userData })
} catch(err){
  res.status(500).send({error:err.message})
}
 }
 //======================================================================================================================================
//  Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body.
 
 
const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById({_id:userId});
  if (!user) {
    return res.status(400).send("No such user exists");
  }
  let userData = req.body;

  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.staus(200).send({ status: true, data: updatedUser });
} catch(err){
  res.status(500).send({error:err.message})
}
};

// ====================================================================================================================================
// Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true.  


const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;

  let deleteUser = await userModel.findOneAndUpdate( userId, {$set:userData} );
  res.status(200).send({ status:deleteUser, data: deleteUser });
}catch(err){
  res.status(500)({error:err.message})
}
};

// + Please note that you have to also write the logic for authorisation now so that a logged in user can modify or fetch ONLY their own data.(midd2 in midilleware module)
// + You have to implement authorisation for fetch user details, update user and delete user apis
// + Run this code and ensure the authorisation works fine for all the apis before following the next requirement
// + You now have to move this similar code in all the three apis in a suitable middleware



let postmesssage = async function(req, res){
try{
  let msg = req.body.msg

  let user = await userModel.findById(req.params.userId)

  if(!user) return res.status(400).send({msg: " UserId is invaild "})

  let updatedPosts = user.posts

  updatedPosts.push(msg)

  let updatedUser = await userModel.findOneAndUpdate({_id:user._id}, {posts: updatedPosts})

  return res.status(200).send({status: true , msg: updatedUser})
} catch(err){
  res.status(500).send({error:err.message})
}
}




module.exports.postmesssage = postmesssage
module.exports.userLogin = userLogin;
module.exports.getUser=getUser;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
module.exports.createUser = createUser