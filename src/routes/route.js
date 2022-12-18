const express = require('express');
const router = express.Router();
const BookDetails = require('../controllers/bookController5')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// =================================================================


router.post("/createBookDetails", BookDetails.createBook )
router.post("/getBooksInYear", BookDetails.getBooksInYear )
router.post("/getParticularBooks", BookDetails.getParticularBooks )


router.get("/bookList", BookDetails.bookList )
router.get("/getXINRBooks", BookDetails.getXINRBooks )
router.get("/getRandomBooks", BookDetails.getRandomBooks )


module.exports = router;