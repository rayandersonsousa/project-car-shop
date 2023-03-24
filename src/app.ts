import express from 'express';
import carRouter from './Routes/CarRoutes';
import motorcycleRouter from './Routes/motorcycleRoutes';

const app = express();

app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);

export default app;
