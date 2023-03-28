const { expect } = require('chai');
const service = require('../../../src/services/products.service');
const controller = require('../../../src/controllers/products.controller');
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

    sinon.stub(service, 'getAllProducts').resolves(mockModels.allProductsResponse);
    await controller.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockModels.allProductsResponse);

    sinon.restore()
  })
})

