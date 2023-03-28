const shema = require('./shema');

const validateName = (name) => {
  const { error } = shema.productSchema.validate({ name });
  if (error) return { type: 'INVALID_NAME', message: '"name" is required' };
  if (name.length < 5) {
    return {
      type: 'INVALID_LENGTH',
      message: '"name" length must be at least 5 characters long',
    };
  }
  return { type: null, message: '' };
};

const validateId = (id) => {
  const { error } = shema.idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  return { type: null, message: '' };
};

module.exports = {
  validateName,
  validateId,
};