const chai = require("chai");
const sinon = require("sinon");
const { expect } = chai;

const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');
const mockSales = require('../controllers/mockSales')

describe("Testes de unidade da camada Service de produtos", () => {
  it("Testa se retorna todos os produtos", async () => {
    sinon.stub(salesModel, "listAllSale").resolves(mockSales.allSalesResponse);

    const listAll = await salesService.listAllSales();

    expect(listAll).to.deep.equal(mockSales.allSalesResponse);
  });

  it("Testa se retorna produto procurado pelo id", async () => {
    sinon.stub(salesModel, "listSaleId").resolves(mockSales.allSalesResponse[0]);

    const listId = await salesService.listSaleId(1);

    expect(listId).to.deep.equal(mockSales.allSalesResponse[0]);
  });

  it('Testa retorno inválido', async function () {
    sinon.stub(salesModel, "listSaleId").resolves(undefined);

    const idInvalid = 3534;

    try {
      await salesService.listSaleId(idInvalid);
    } catch (err) {
      expect(err.status).to.be.equal(404);
      // expect(err.message).to.deep.equal('Sale not found');
    }
  });

  afterEach(() => {
    sinon.restore();
  });
});