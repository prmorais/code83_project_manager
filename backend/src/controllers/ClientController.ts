import { Request, Response } from 'express';
// import Client from '../models/Client';
import ClientRepository from '../repositories/ClientRepository';
import CreateClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import PaginateClientService from '../services/PaginatedClientService';
import UpdateClientService from '../services/UpdateClientService';

class ClienteController {
  public async index(req: Request, res: Response): Promise<Response> {
    const clientRepository = new ClientRepository();

    const clients = await clientRepository.findAll();

    return res.json(clients);
  }

  public async search(req: Request, res: Response): Promise<Response> {
    const { name } = req.query;

    const clientRepository = new ClientRepository();

    const clients = await clientRepository.findByName(name?.toString() || '');

    return res.json(clients);
  }

  public async paginated(req: Request, res: Response): Promise<Response> {
    const { page } = req.query;
    const clientRepository = new ClientRepository();
    const clientsPaginated = new PaginateClientService(clientRepository);

    const clients = await clientsPaginated.execute({
      page: page !== undefined ? parseInt(page.toString(), 10) : 0,
    });

    return res.json(clients);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const clientRepository = new ClientRepository();
    const createClient = new CreateClientService(clientRepository);

    const client = await createClient.execute({
      ...req.body,
    });

    return res.status(201).json(client);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const clientRepository = new ClientRepository();
    const updateClient = new UpdateClientService(clientRepository);

    const client = await updateClient.execute({
      id,
      ...req.body,
    });

    return res.json(client);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const clientRepository = new ClientRepository();
    const deletedClient = new DeleteClientService(clientRepository);

    await deletedClient.execute(id);

    return res.json({ message: `Cliente com ID: ${id} foi exlcuído` });
  }
}

export default new ClienteController();
