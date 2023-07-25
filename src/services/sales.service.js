const salesModel = require('../models/sales.model');
const productModels = require('../models/products.model');
const validates = require('./validations/postSalesValid');

const err = (status, message) => ({ status, message });

const postSales = async (saleProduct) => {
  const error = validates.validateSale(saleProduct);
  if (error.type) return error; 

  const arrProducts = await Promise.all(saleProduct
      .map(async (any) => {
      const onlyProduct = await productModels.findByProductId(any.productId);
      return onlyProduct;
  }));

  if (arrProducts.includes(undefined)) return { type: 'NOT_FOUND', message: 'Product not found' };

  const id = await salesModel.insertSale();

  await Promise.all(saleProduct
    .map(async (any) => {
      await salesModel
        .insertSaleProduct(id, any.productId, any.quantity);
  }));

  return { type: null, message: { id, itemsSold: saleProduct } };
};

const listAllSales = async () => {
  const result = await salesModel.listAllSale();
  return result;
};

const listSaleId = async (id) => {
  const result = await salesModel.listSaleId(id);
  if (!result) {
    throw err(404, 'Sale not found');
  }
  if (result.length === 0) {
    throw err(404, 'Sale not found');
  }
  return result;
};

module.exports = { postSales, listAllSales, listSaleId };
