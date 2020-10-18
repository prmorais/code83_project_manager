import { Router } from 'express';
import ClienteController from '../controllers/ClientController';

const clientRoutes = Router();
const clientController = ClienteController;

clientRoutes.get('/', clientController.index);
clientRoutes.get('/paginate', clientController.paginated);
clientRoutes.get('/search', clientController.search);
clientRoutes.post('/', clientController.create);
clientRoutes.put('/:id', clientController.update);
clientRoutes.delete('/:id', clientController.delete);

export default clientRoutes;
