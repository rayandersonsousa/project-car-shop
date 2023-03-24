const validId = '641df7663ca0be239ac9569c';

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

export { newCar, carRequest, carResponse, allCars, validId };