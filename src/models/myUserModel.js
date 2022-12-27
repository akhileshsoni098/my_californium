const mongoose = require('mongoose');

 const userId = new mongoose.Schema({

firstName : String,
    lastName : String,
    mobile: String,
    emailId: String,
    password: String,
    gender : {
        type:String,
        enum: ["male", "female", "others"]
    },
    posts :{
        type:[],
        default:[]
    },
	isDeleted:{
        type:Boolean,
        default: false
    },

    age :Number

 },
   {timestamps:true}    )

module.exports = mongoose.model('CreateUserId' , userId )