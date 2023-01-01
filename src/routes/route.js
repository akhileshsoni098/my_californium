const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController")
const UserController = require('../controllers/newUserController')
const headerMidi = require('../newMiddleware/newcommonMiddleware')
const OrderController = require('../controllers/orderController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/productCreate" , productController.productCreate)

router.post('/createUser',  UserController.createUser)

router.post('/orderCreate', OrderController.orderCreate )



module.exports = router;