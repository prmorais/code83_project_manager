import { getRepository, Repository } from 'typeorm';

import IClientRepository from './IClientRepository';
import Client from '../models/Client';
import CreateClientDTO from '../dtos/createClientDTO';

class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findAll(): Promise<Client[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({
      where: { id },
    });
    return client;
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({
      where: { email },
    });

    return client;
  }

  public async createClient(data: CreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create({
      ...data,
    });

    await this.ormRepository.save(client);
    return client;
  }

  public async updateUser(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }
}

export default ClientRepository;
