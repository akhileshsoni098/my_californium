
const mongoose = require('mongoose')

const product = new mongoose.Schema({
   
// - Your product document should look like this

	name:String,
	category:String,
	price:{
        type:Number,
        required:true
    }

})
module.exports = mongoose.model('Products' , product)