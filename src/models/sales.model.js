const camelize = require('camelize');
const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (NOW())',
  );
  return insertId;
};

const insertSaleProduct = async (saleId, productId, quantity) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return result;
};

const listSaleId = async (id) => {
  const [product] = await connection.execute(
    `SELECT sales.date, sp.product_id AS productId, sp.quantity 
      FROM StoreManager.sales
      INNER JOIN StoreManager.sales_products AS sp ON sales.id = sp.sale_id
      WHERE sp.sale_id = ?
      ORDER BY sale_id, product_id;`,
    [id],
  );
  return product;
};

const listAllSale = async () => {
  const [products] = await connection.execute(
    `SELECT sales.id AS saleId, sales.date, sp.product_id AS productId, sp.quantity 
      FROM StoreManager.sales
      INNER JOIN StoreManager.sales_products AS sp ON sales.id = sp.sale_id
      ORDER BY sale_id, product_id;`,
  );
  return camelize(products);
};

module.exports = { insertSale, insertSaleProduct, listAllSale, listSaleId };