const express = require('express');
const router = express.Router();

const UserConr = require('../controllers/myUserController')

const midd = require('../middleware/myMidd')  



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createUser", UserConr.createUser)

 router.post("/login", UserConr.userLogin)

router.get("/users/:userId", midd.mid, UserConr.getUser)

 router.put("/users/:userId", midd.mid,UserConr.updateUser)

 router.get("/user/:userId", midd.mid,UserConr.deleteUser)



module.exports = router;