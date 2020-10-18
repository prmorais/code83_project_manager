import { getRepository, Like, Repository } from 'typeorm';

import IClientRepository from './IClientRepository';
import Client from '../models/Client';
import CreateClientDTO from '../dtos/createClientDTO';

class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findByName(name: string): Promise<Client[]> {
    return this.ormRepository.find({
      name: Like(`%${name}%`),
    });
  }

  public async findAllPaginate(page: number): Promise<[Client[], number]> {
    return this.ormRepository.findAndCount({
      skip: page,
      take: 10,
    });
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

  public async updateClient(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async deleteClient(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default ClientRepository;
