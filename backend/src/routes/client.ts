import { Router } from 'express';
import ClienteController from '../controllers/ClientController';

const clientRoutes = Router();
const clientController = ClienteController;

clientRoutes.get('/', clientController.index);
clientRoutes.post('/', clientController.create);
clientRoutes.put('/:id', clientController.update);

export default clientRoutes;
