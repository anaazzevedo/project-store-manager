const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const productSchema = Joi.object({ name: Joi.string().min(3).max(30).required() });

const salesShema = Joi.array().items(Joi.object({
  productId: Joi.number().integer().min(1).required()
    .label('productId'),
  quantity: Joi.number().integer().min(1).required()
    .label('quantity'),
}));

module.exports = {
  productSchema, idSchema, salesShema,
};