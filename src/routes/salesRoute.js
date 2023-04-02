const { Router } = require('express');

const salesRoute = Router();
const salesController = require('../controllers/sales.controller');

salesRoute.post('/', salesController.postSales);
salesRoute.get('/', salesController.listAllSales);
salesRoute.get('/:id', salesController.listSaleId);

module.exports = salesRoute;