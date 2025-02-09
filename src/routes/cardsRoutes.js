const express = require("express");
const { createCard, getCards } = require("../controllers/cardsController");
const router = express.Router();

router.post("/cards", createCard);  // Para agregar una tarjeta
router.get("/cards", getCards);  // Para obtener todas las tarjetas

module.exports = router;
