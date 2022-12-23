const express = require('express');
const router = express.Router();




router.get("/AkLearnigMW",function (req, res) {
    res.send("Learning Middleware")
})


module.exports = router;