import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);

    return null;
  }

  public async registerMotorcycle(motorcycle: IMotorcycle) {
    const motorODM = new MotorcycleODM();
    const vehicle = await motorODM.create(motorcycle);
    return this.createMotorcycleDomain(vehicle);
  }

  public async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.find();
    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updated = await motorcycleODM.update(id, data);
    return this.createMotorcycleDomain(updated);
  }
}

export default MotorcycleService;