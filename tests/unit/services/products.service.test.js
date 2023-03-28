const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const { getAllProducts, getProductId, postProduct } = require('../../../src/services/products.service');

const connection = require('../../../src/models/connection');
const mockModels = require('./mockModels');

describe('Testes de unidade da camada Service de produtos', function () {
  it('Testa se retorna todos os produtos', async function () {

    sinon.stub(productsModel, 'findAllProducts').resolves(mockModels.allProductsResponse);

    const result = await  productsModel.findAllProducts();

    expect(result).to.deep.equal(mockModels.allProductsResponse);
  });

  it('Testa se retorna produto procurado pelo id', async function () {

    sinon.stub(productsModel, 'findByProductId').resolves(mockModels.allProductsResponse[0]);

    const result = await productsModel.findByProductId();

    expect(result).to.deep.equal(mockModels.allProductsResponse[0]);
  });

  it('Testa retorno invalido', async function () {
    const idInvalid = 390423;

    try {
      await getProductId(idInvalid);
    } catch (err) {
      expect(err.status).to.be.equal(404);
      expect(err.message).to.deep.equal('Product not found');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});