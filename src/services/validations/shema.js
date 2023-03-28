const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const productSchema = Joi.object({ name: Joi.string().min(3).max(30).required() });

module.exports = {
  productSchema, idSchema,
};