import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async registerCar() {
    const car = await this.service.registerCar(this.req.body);
    return this.res.status(201).json(car);
  }

  public async findAll() {
    const cars = await this.service.findAll();
    return this.res.status(200).json(cars);
  }

  public async findById() {
    const { id } = this.req.params;

    if (id.length !== 24) return this.res.status(422).json({ message: 'Invalid mongo id' });

    try {
      const car = await this.service.findById(id);

      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }

      return this.res.status(200).json(car);
    } catch (err) {
      this.next(err);
    }
  }
}

export default CarController;