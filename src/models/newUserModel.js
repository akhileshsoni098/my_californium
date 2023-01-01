const mongoose = require('mongoose')

const userData = new mongoose.Schema({


    // - Your user document should look like this

    
        name: String,
        balance:{
            type:Number,
            default:100
        },    // Default balance at user registration is 100
        address:String,
        age: Number,
         gender: {
            type:String,
            enum:["male","female" , "others"]
         } ,  // Allowed values are - “male”, “female”, “other”

        
        isFreeAppUser:{
            type:Boolean,
            default:false
        }

        // Default false value.
})
module.exports = mongoose.model('NewUser', userData)