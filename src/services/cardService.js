const Card = require("../models/Card");

const createCard = async (data) => {
  return await Card.create(data);
};

module.exports = { createCard };
