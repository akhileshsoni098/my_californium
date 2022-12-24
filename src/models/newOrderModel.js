const mongoose = require('mongoose')
const objId = mongoose.Schema.Types.ObjectId
const order = new mongoose.Schema({
user_id:{
    type:objId,
    ref:"NewUser"
},
user_id:{
    type:objId,
    ref:"Products"
},
amount:Number,
isFreeAppUser:Boolean,

date :String

})

module.exports = mongoose.model('Orders', order)