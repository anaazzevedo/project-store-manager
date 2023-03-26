const productsModel = require('../models/products.model');

const error = (status, message) => ({ status, message });

const getAllProducts = async () => {
  const result = await productsModel.findAllProducts();
  return result;
};

const getProductId = async (id) => {
  const result = await productsModel.findByProductId(id);
  if (!result) {
    throw error(404, 'Product not found');
  }
  return result;
};

module.exports = { getAllProducts, getProductId };
