const { Router } = require('express');

const productsRoute = Router();
const productsController = require('../controllers/products.controller');

productsRoute.get('/', productsController.getAllProducts);
productsRoute.get('/:id', productsController.getProductId);

module.exports = productsRoute;
