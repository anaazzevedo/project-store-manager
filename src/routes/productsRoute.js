const { Router } = require('express');

const productsRoute = Router();
const productsController = require('../controllers/products.controller');

productsRoute.get('/', productsController.getAllProducts);
productsRoute.get('/:id', productsController.getProductId);
productsRoute.post('/', productsController.postProduct);
productsRoute.put('/:id', productsController.updateProductId);

module.exports = productsRoute;
