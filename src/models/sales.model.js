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
  console.log(result);
  return result;
};

// const findBySalesId = async (id) => {
//   const [[product]] = await connection.execute(
//     'SELECT * FROM StoreManager.sales_products WHERE id = ?',
//     [id],
//   );
//   return product;
// };

module.exports = { insertSale, insertSaleProduct };