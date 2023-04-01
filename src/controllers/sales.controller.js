const salesService = require('../services/sales.service');

const targetError = require('../middlewares/errorCase');

const postSales = async (req, res) => {
  const salesProducts = req.body;
  const { message, type } = await salesService.postSales(salesProducts);

  if (type) return res.status(targetError.targetError(type)).json({ message });
  
  return res.status(201).json(message);
};

module.exports = { postSales };
