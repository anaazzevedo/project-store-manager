const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findByProductId = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return product;
};

const insertProduct = async (name) => {
  const colums = Object.keys(name).join(', ');
  const value = Object.keys(name).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${colums}) VALUE (${value})`,
    [...Object.values(name)],
  );
  return insertId;   
};

module.exports = {
  findAllProducts,
  findByProductId,
  insertProduct,
};