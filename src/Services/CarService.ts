import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);

    return null;
  }

  public async registerCar(car: ICar) {
    const carODM = new CarODM();
    const vehicle = await carODM.create(car);
    return this.createCarDomain(vehicle);
  }

  public async findAll() {
    const carODM = new CarODM();
    const cars = await carODM.find();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    return this.createCarDomain(car);
  }

  public async update(id: string, data: ICar) {
    const carODM = new CarODM();
    const updated = await carODM.update(id, data);
    return this.createCarDomain(updated);
  }
}

export default CarService;