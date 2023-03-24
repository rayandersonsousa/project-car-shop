import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post('/cars', (req, res, next) => new CarController(req, res, next).registerCar());
carRouter.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());
carRouter.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());

export default carRouter;