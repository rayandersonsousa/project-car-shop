import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService'; 
import { motorcycleRequest, motorcycleResponse,
  allMotorcycles, validMotorcycleId, updatedMotorcycle } from '../utils/mocks';

describe('Testes para CarService', function () {
  it('Testa se é possível criar uma moto', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleResponse);

    const service = new MotorcycleService();
    const motorcycle = await service.registerMotorcycle(motorcycleRequest);

    expect(motorcycle).to.be.deep.equal(motorcycleResponse);
  });

  it('Testa se é possível retornar todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycles);

    const service = new MotorcycleService();
    const motorcycles = await service.findAll();

    expect(motorcycles).to.be.deep.equal(allMotorcycles);
  });

  it('Testa se é possível encontrar uma moto pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleResponse);

    const service = new MotorcycleService();
    const motorcycles = await service.findById(validMotorcycleId);

    expect(motorcycles).to.be.deep.equal(motorcycleResponse);
  });

  it('Testa se é possível atualizar uma moto pelo id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMotorcycle);

    const service = new MotorcycleService();
    const motorcycle = await service.update(validMotorcycleId, motorcycleRequest);

    expect(motorcycle).to.be.deep.equal(updatedMotorcycle);
  });

  afterEach(function () {
    sinon.restore();
  });
});