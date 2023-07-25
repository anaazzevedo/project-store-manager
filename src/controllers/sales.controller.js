const salesService = require('../services/sales.service');
const targetError = require('../middlewares/errorCase');

const postSales = async (req, res) => {
  const salesProducts = req.body;
  const { message, type } = await salesService.postSales(salesProducts);

  if (type) return res.status(targetError.targetError(type)).json({ message });
  
  return res.status(201).json(message);
};

const listAllSales = async (_req, res, next) => {
  try {
    const result = await salesService.listAllSales();
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const listSaleId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await salesService.listSaleId(id);
    
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { postSales, listAllSales, listSaleId };
