const errorCase = (error, _req, res, _next) => {
  console.log(error);
  if (error.status) return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: error.message });
};

module.exports = errorCase;