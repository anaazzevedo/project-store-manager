const productsModel = require('../models/products.model');
const validates = require('./validations/postProductValid');

const err = (status, message) => ({ status, message });

const getAllProducts = async () => {
  const result = await productsModel.findAllProducts();
  return result;
};

const getProductId = async (id) => {
  const result = await productsModel.findByProductId(id);
  if (!result) {
    throw err(404, 'Product not found');
  }
  return result;
};

const postProduct = async (name) => {
  const error = await validates.validateName(name);
  
  if (error.type) return error;

  const insertNewProduct = await productsModel.insertProduct({ name });
  const getNewProduct = await productsModel.findByProductId(insertNewProduct);
  return { type: null, message: getNewProduct };
};

module.exports = { getAllProducts, getProductId, postProduct };
