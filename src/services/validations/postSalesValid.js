const shema = require('./shema');

const validateSale = (saleProduct) => {
  const { error } = shema.salesShema.validate(saleProduct);
  if (error) {
    return {
      type: error.message.includes('is required') ? 'NAME_IS_REQUIRED' : 'INVALID_VALUE',
      message: error.message,
    };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateSale,
};