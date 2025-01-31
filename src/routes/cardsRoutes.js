const express = require("express");
const { createCard } = require("../controllers/cardsController");

const router = express.Router();

router.post("/", createCard);

module.exports = router;
