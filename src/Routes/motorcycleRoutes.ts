import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next)
  .registerMotorcycle());
motorcycleRouter.get('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).findAll());
motorcycleRouter.get('/motorcycles/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).findById());
motorcycleRouter.put('/motorcycles/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).update());

export default motorcycleRouter;