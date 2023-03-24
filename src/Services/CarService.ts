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
}

export default CarService;