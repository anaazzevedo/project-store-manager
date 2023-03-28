const { expect } = require('chai');
const sinon = require('sinon');
const { findAllProducts,
  findByProductId,
  insertProduct } = require('../../../src/models/products.model');

const connection = require('../../../src/models/connection');
const mockModels = require('./mockModels');

describe('Testes de unidade da camada Model de produtos', function () {
  it('Testa função findAllProducts', async function () {

    sinon.stub(connection, 'execute').resolves([mockModels.allProductsResponse]);
    
    const result = await findAllProducts();
    
    expect(result).to.be.deep.equal(mockModels.allProductsResponse);

    sinon.restore();
  });

  it('Testa recuperação de produto a partir do seu id', async function () {
    
    sinon.stub(connection, 'execute').resolves([[mockModels.allProductsResponse[0]]]);
    
    const result = await findByProductId(1);
    
    expect(result).to.be.deep.equal(mockModels.allProductsResponse[0]);

    sinon.restore();
  });

  it('Cadastrando uma pessoa passageira', async function () {
    
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    
    const result = await insertProduct(mockModels.newProduct);
    
    expect(result).to.equal(42);

    sinon.restore();
  });
})