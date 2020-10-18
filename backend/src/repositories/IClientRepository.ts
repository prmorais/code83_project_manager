import CreateClientDTO from '../dtos/createClientDTO';
import Client from '../models/Client';

export default interface IClientRepository {
  findAll(): Promise<Client[]>;
  findAllPaginate(page: number): Promise<[Client[], number]>;
  findByName(name: string): Promise<Client[]>;

  findByEmail(email: string): Promise<Client | undefined>;
  findById(id: string): Promise<Client | undefined>;

  createClient(data: CreateClientDTO): Promise<Client>;
  updateClient(cliente: Client): Promise<Client>;
  deleteClient(id: string): Promise<void>;
}
