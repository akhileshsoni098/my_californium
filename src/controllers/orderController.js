const OrderModel = require('../models/newOrderModel')
const userModel = require('../models/newUserModel')
const productModel = require('../models/newProductModel')


const orderCreate = async function(req, res){
 
// todo: header validation, return error if absent
let appHeader = req.headers["isFreeAppUser"]
if (!appHeader) appHeader = req.headers["isfreeappuser"]
// agr ye appHeader camel me nhi h toh lower me check kro agr nhi h toh aage...
if(!appHeader) return res.send({status:false, msg:" headers is mandatory"})

// todo: use the header value to assign isFreeAppUser property in user document been created

let OrderData = req.body

if(appHeader =="true"){

    OrderData.isFreeAppUser = true
}else {
    OrderData.isFreeAppUser = false
} 
// todo: User validation
let user = await userModel.findById(OrderData.user_id)

if(!user) return res.send({status:false, msg: "user not found"})

// todo: product validarion
let product = await productModel.findById(OrderData.productId)

if(!product) return res.send({status:false , msg:"product not found"})


// todo:if free app, then don't deduct users balance and set amount to 0
if(appHeader =="true"){
    OrderData.amount = 0

    let saveOrder = await OrderModel.create(OrderData)

    res.send({msg:saveOrder})
}
// todo: if paid app, then check user's balance is not enough then don't create the order return error

if(appHeader !="true"){
    if(user.balance < product.price){
        return res.send({status:false , msg: "user doesn't have sufficient balance"})
    } else {
  // todo: if paid app, then check user balance, if enough then create an order
  
OrderData.amount = product.price
let makeOrder = await OrderModel.create(OrderData)

await userModel.findOneAndUpdate({_id:OrderData.user_id},{balance:user.balance - product.price})
    return res.send({status: true, data:makeOrder})
}

}

}


module.exports.orderCreate = orderCreate