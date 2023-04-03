const productsService = require('../services/products.service');
const targetError = require('../middlewares/errorCase');

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

const postProduct = async (req, res) => {
  const { name } = req.body;
  const { message, type } = await productsService.postProduct(name);
  
  if (type === 'INVALID_NAME') return res.status(400).json({ message });
  if (type === 'INVALID_LENGTH') return res.status(422).json({ message });
  
  return res.status(201).json(message);
};

const updateProductId = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productsService.updateProductId(id, name);

  if (type === 'INVALID_NAME') return res.status(400).json({ message });
  if (type === 'INVALID_LENGTH') return res.status(422).json({ message });
  if (type) return res.status(targetError.targetError(type)).json({ message });

  return res.status(200).json({ id, name: message });
};

module.exports = { getAllProducts, getProductId, postProduct, updateProductId };
