const { Router } = require('express');

const salesRoute = Router();
const salesController = require('../controllers/sales.controller');

salesRoute.post('/', salesController.postSales);

module.exports = salesRoute;