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

router.post('/createUser', headerMidi.middl, UserController.createUser)

router.post('/orderCreate',headerMidi.middl,OrderController.orderCreate )


// router.post("/createBook", commonMW.abc, BookController.createBook  )
// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

module.exports = router;