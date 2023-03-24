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
}

export default MotorcycleService;