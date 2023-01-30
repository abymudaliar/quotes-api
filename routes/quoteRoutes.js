const express = require("express");
const router = express.Router();
const { getAllQuotes } = require("../controllers/quoteController");

router.route("/").get(getAllQuotes);

module.exports = router;
