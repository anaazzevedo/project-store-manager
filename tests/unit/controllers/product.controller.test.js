const { expect } = require('chai');
const serviceProducts = require('../../../src/services/products.service');
const controllerProducts = require('../../../src/controllers/products.controller');
const mockModels = require('../models/mockModels')
const sinon = require('sinon');

const chai = require('chai')
const sinonChai = require('sinon-chai')

chai.use(sinonChai);

describe('Testes de unidade da camada Controller de produtos', function () {
  it('Testa se retorna status 200', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(serviceProducts, 'getAllProducts').resolves(mockModels.allProductsResponse);
    await controllerProducts.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockModels.allProductsResponse);

    sinon.restore()
  })

  it('Testa se retorna product pelo id', async function () {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(serviceProducts, 'getProductId').resolves(mockModels.allProductsResponse);
    await controllerProducts.getProductId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockModels.allProductsResponse);

    sinon.restore()
  })
})
