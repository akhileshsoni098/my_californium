const ProductModel = require('../models/newProductModel')

const productCreate = async function(req,res){
let productDetails = req.body
const createProduct = await ProductModel.create(productDetails)
res.send({msg: createProduct})
}



module.exports.productCreate = productCreate