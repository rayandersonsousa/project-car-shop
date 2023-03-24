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
}

export default CarController;