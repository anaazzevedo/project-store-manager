const productsService = require('../services/products.service');

const getAllProducts = async (_req, res, next) => {
  try {
    const result = await productsService.getAllProducts();
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getProductId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsService.getProductId(id);
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProducts, getProductId };
