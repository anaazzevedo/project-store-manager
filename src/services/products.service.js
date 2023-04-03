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

const updateProductId = async (id, name) => {
  const error = await validates.validateName(name);
  if (error.type) return error;
  
  const affectedRows = await productsModel.updateProductId(id, name);
  if (affectedRows === 0) return { type: 'NOT_FOUND', message: 'Product not found' };

  return { message: name, type: null };
};

module.exports = { getAllProducts, getProductId, postProduct, updateProductId };
