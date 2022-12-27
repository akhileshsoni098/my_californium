

const userModel = require('../models/myUserModel')

const jwt = require('jsonwebtoken')

// =====================================================================================================================
// - Write a **POST api /users** to register a user from the user details in request body.  

const createUser  = async function(req, res){

let userDetails = req.body

let saveData = await userModel.create(userDetails)

res.send({status:true, msg : saveData})

}
// =======================================================================================================================
// Write a ***POST api /login** to login a user that takes user details - email and password from the request body. If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it in response body.

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
// ===========================================================================================================================================
// Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url.

 const getUser=async function (req,res){

  let userId = req.params.userId;
   
    let userData= await userModel.findById(userId)

    if(!userData) {res.send({msg : "invalide user id "})}

    res.send({status:true, data:userData })

 }
 //======================================================================================================================================
//  Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body.
 
 
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById({_id:userId});
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;

  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

// ====================================================================================================================================
// Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true.  


const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let deleteUser = await userModel.findOneAndUpdate( userId, {$set:userData} );
  res.send({ status:deleteUser, data: deleteUser });
  
};
// + Please note that you have to also write the logic for authorisation now so that a logged in user can modify or fetch ONLY their own data.(midd2 in midilleware module)
// + You have to implement authorisation for fetch user details, update user and delete user apis
// + Run this code and ensure the authorisation works fine for all the apis before following the next requirement
// + You now have to move this similar code in all the three apis in a suitable middleware



let postmesssage = async function(req, res){

  let msg = req.body.msg

  let user = await userModel.findById(req.params.userId)

  if(!user) return res.send({msg: " UserId is invaild "})

  let updatedPosts = user.posts

  updatedPosts.push(msg)

  let updatedUser = await userModel.findOneAndUpdate({_id:user._id}, {posts: updatedPosts})

  return res.send({status: true , msg: updatedUser})

}




module.exports.postmesssage = postmesssage
module.exports.userLogin = userLogin;
module.exports.getUser=getUser;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
module.exports.createUser = createUser