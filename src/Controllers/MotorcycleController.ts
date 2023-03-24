import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async registerMotorcycle() {
    const motorcycle = await this.service.registerMotorcycle(this.req.body);
    return this.res.status(201).json(motorcycle);
  }

  public async findAll() {
    const motorcycles = await this.service.findAll();
    return this.res.status(200).json(motorcycles);
  }

  public async findById() {
    const { id } = this.req.params;

    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

    try {
      const motorcycle = await this.service.findById(id);

      if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(motorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const motorcycle = this.req.body;

    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

    try {
      const updated = await this.service.update(id, motorcycle);

      if (!updated) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(updated);
    } catch (err) {
      this.next(err);
    }
  }
}

export default MotorcycleController;