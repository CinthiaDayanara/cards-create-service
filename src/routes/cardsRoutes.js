const express = require("express");
const { createCard, getCards } = require("../controllers/cardsController");
const router = express.Router();

router.post("/", createCard);  // Para agregar una tarjeta
router.get("/", getCards);  // Para obtener todas las tarjetas

module.exports = router;
