const OrderCreation = require('../models/newOrderModel')


const orderCreate = async function(res, req){

    const{Products,NewUser} = req.body
    
    //if user fill na kre then ye msg
if(!Products){
    return res.send({staus:false, msg:"Prouct is mandatory"})
}
if(!NewUser){
    return res.send({staus:false, msg:"NewUser is mandatory"})
}
const productId = await Products.findone({_id:Products})

//wrong id fill kre then

if(!productId){ 
return res.send({status:false, msg:"Doesn't exist"})
}
const newUserId = await Products.findone({_id:NewUser})

if(!newUserId){
return res.send({status:false, msg:"Doesn't exist"})


//logical part smjh nhi aa rha h abhi time bhi km h krunga jarur...


}

    const saveOrder = await OrderCreation.create(order)

        res.send({msg:saveOrder})
    }
module.exports.orderCreate = orderCreate