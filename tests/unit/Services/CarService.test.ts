import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService'; 
import { carRequest, carResponse, allCars, validCarId } from '../utils/mocks';

describe('Testes para CarService', function () {
  it('Testa se é possível criar um carro', async function () {
    sinon.stub(Model, 'create').resolves(carResponse);

    const service = new CarService();
    const car = await service.registerCar(carRequest);

    expect(car).to.be.deep.equal(carResponse);
  });

  it('Testa se é possível retornar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const service = new CarService();
    const cars = await service.findAll();

    expect(cars).to.be.deep.equal(allCars);
  });

  it('Testa se é possível encontrar um carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(carResponse);

    const service = new CarService();
    const cars = await service.findById(validCarId);

    expect(cars).to.be.deep.equal(carResponse);
  });

  afterEach(function () {
    sinon.restore();
  });
});