const express = require("express");

const {allrestro} = require("../controllers/restaurent_details");
const router = express.Router();

router.get("/",allrestro);

module.exports = router;