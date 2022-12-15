const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BooksConroller = require("../controllers/booksController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook", BooksConroller.createBook )
router.get("/getBooks", BooksConroller.getBooksDetails )

module.exports = router;