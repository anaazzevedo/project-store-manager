const salesModel = require('../models/sales.model');
const productModels = require('../models/products.model');
const validates = require('./validations/postSalesValid');

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

module.exports = { postSales };
