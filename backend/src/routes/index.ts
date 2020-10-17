import { Router } from 'express';
import clientRoutes from './client';
import sessionRoutes from './session';
import userRoutes from './user';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) =>
  response.json({ message: 'Olá doido.' }),
);

routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/sessions`, sessionRoutes);
routes.use(`${prefixRoutes}/clients`, clientRoutes);

export default routes;
