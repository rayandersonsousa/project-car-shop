const validCarId = '641df7663ca0be239ac9569c';
const validMotorcycleId = '641e216b76b8252a082fc66e';

const newCar = {
  model: 'Camaro',
  year: 2015,
  color: 'Yellow',
  status: true,
  buyValue: 85.650,
  doorsQty: 2,
  seatsQty: 5,
  id: '641df7663ca0be239ac9569c',
};

const carRequest = {
  model: 'Camaro',
  year: 2015,
  color: 'Yellow',
  status: true,
  buyValue: 85.650,
  doorsQty: 2,
  seatsQty: 5,
};

const carResponse = {
  id: '641df7663ca0be239ac9569c',
  model: 'Camaro',
  year: 2015,
  color: 'Yellow',
  status: true,
  buyValue: 85.650,
  doorsQty: 2,
  seatsQty: 5,
};

const allCars = [
  {
    id: '641df7663ca0be239ac9569c',
    model: 'Camaro',
    year: 2015,
    color: 'Yellow',
    status: true,
    buyValue: 85.650,
    doorsQty: 2,
    seatsQty: 5,
  },
  {
    id: '641df9af3ca0be239ac9569e',
    model: 'Gol',
    year: 2018,
    color: 'White',
    status: true,
    buyValue: 30.23,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '641dfa3a3ca0be239ac956a0',
    model: 'Fusca',
    year: 1985,
    color: 'Azul',
    status: true,
    buyValue: 15.35,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const motorcycleRequest = {
  model: 'Honda Biz 250',
  year: 2005,
  color: 'Red',
  status: true,
  buyValue: 8.000,
  category: 'Street',
  engineCapacity: 250,
};

const motorcycleResponse = {
  id: '641e216b76b8252a082fc66e',
  model: 'Honda Biz 250',
  year: 2005,
  color: 'Red',
  status: true,
  buyValue: 8,
  category: 'Street',
  engineCapacity: 250,
};

const allMotorcycles = [
  {
    id: '641e216b76b8252a082fc66e',
    model: 'Honda Biz 125',
    year: 2018,
    color: 'Green',
    status: true,
    buyValue: 11.000,
    category: 'Street',
    engineCapacity: 125,
  },
  {
    id: '641e229576b8252a082fc670',
    model: 'Yamaha Fluo',
    year: 2022,
    color: 'White',
    status: true,
    buyValue: 14.000,
    category: 'Street',
    engineCapacity: 125,
  },
];

export { newCar, carRequest, carResponse, allCars, validCarId, motorcycleRequest,
  motorcycleResponse, allMotorcycles, validMotorcycleId };