const Joi = require("joi");

const cardSchema = Joi.object({
  list_id: Joi.number().integer().required().messages({
    "number.base": "El list_id debe ser un número entero.",
    "any.required": "El list_id es obligatorio."
  }),
  title: Joi.string().min(3).max(255).required().messages({
    "string.min": "El título debe tener al menos 3 caracteres.",
    "string.max": "El título no puede exceder los 255 caracteres.",
    "any.required": "El título es obligatorio."
  }),
  description: Joi.string().optional(),
  due_date: Joi.date().optional().messages({
    "date.base": "La fecha de vencimiento debe ser una fecha válida."
  })
});

const validateCard = (data) => {
  const { error } = cardSchema.validate(data, { abortEarly: false });
  if (error) throw new Error(error.details.map(err => err.message).join(", "));
};

module.exports = { validateCard };
