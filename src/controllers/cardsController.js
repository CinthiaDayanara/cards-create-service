const Card = require("../models/Card");

// Crear una tarjeta
const createCard = async (req, res) => {
  try {
    console.log("🔍 Datos recibidos:", req.body);
    
    const { titulo, descripcion, fecha_vencimiento, lista_id } = req.body;

    if (!titulo || !lista_id) {
      return res.status(400).json({ error: "El titulo y lista_id son obligatorios." });
    }

    const nuevaTarjeta = await Card.create({ titulo, descripcion, fecha_vencimiento, lista_id });

    res.status(201).json({ message: "Tarjeta creada con éxito", tarjeta: nuevaTarjeta });
  } catch (error) {
    res.status(500).json({ error: "❌ Error al crear la tarjeta: " + error.message });
  }
};

// Obtener todas las tarjetas
const getCards = async (req, res) => {
  try {
    const tarjetas = await Card.findAll();
    res.status(200).json(tarjetas);
  } catch (error) {
    res.status(500).json({ error: "❌ Error al obtener tarjetas: " + error.message });
  }
};

module.exports = { createCard, getCards };
