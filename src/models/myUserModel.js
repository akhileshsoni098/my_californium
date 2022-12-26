const mongoose = require('mongoose');

 const userId = new mongoose.Schema({
name: String,


firstName : String,
    lastName : String,
    mobile: String,
    emailId: String,
    password: String,
    gender : {
        type:String,
        enum: ["male", "female", "others"]
    },

	isDeleted:{
        type:Boolean,
        default: false
    },

    age :Number

 },
   {timestamps:true}    )

module.exports = mongoose.model('CreateUserId' , userId )