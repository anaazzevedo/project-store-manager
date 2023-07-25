const { expect } = require('chai');
const serviceSales = require('../../../src/services/sales.service');
const controllerSales = require('../../../src/controllers/sales.controller');
const mockSales = require('./mockSales');
const sinon = require('sinon');

const chai = require('chai')
const sinonChai = require('sinon-chai')

chai.use(sinonChai);

describe('Testes de unidade da camada Controller de sales', function () {
  it('Testa se retorna status 200', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(serviceSales, 'listAllSales').resolves(mockSales.allSalesResponse);
    await controllerSales.listAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockSales.allSalesResponse);

    sinon.restore()
  })

  it('Testa se retorna sale pelo id', async function () {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(serviceSales, 'listSaleId').resolves(mockSales.allSalesResponse);
    await controllerSales.listSaleId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockSales.allSalesResponse);

    sinon.restore()
  })
})

