const errorCase = (error, _req, res, _next) => {
  console.log(error);
  if (error.status) return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: error.message });
};

const typesErros = { NOT_FOUND: 404, NAME_IS_REQUIRED: 400, INVALID_VALUE: 422 };

const targetError = (type) => typesErros[type] || 500;

module.exports = { errorCase, targetError };
