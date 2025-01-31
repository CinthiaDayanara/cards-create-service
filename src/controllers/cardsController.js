const { createCard } = require("../services/cardService");
const { validateCard } = require("../utils/validators");

exports.createCard = async (req, res) => {
  try {
    validateCard(req.body);
    const newCard = await createCard(req.body);
    res.status(201).json({ message: "Tarjeta creada", card: newCard });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
