import { Request, Response } from 'express';
// import Client from '../models/Client';
import ClientRepository from '../repositories/ClientRepository';
import CreateClientService from '../services/CreateClientService';
import UpdateClientService from '../services/UpdateClientService';

class ClienteController {
  public async index(req: Request, res: Response): Promise<Response> {
    const clientRepository = new ClientRepository();

    const clients = await clientRepository.findAll();

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
}

export default new ClienteController();
