import CreateClientDTO from '../dtos/createClientDTO';
import Client from '../models/Client';

export default interface IUserRepository {
  findAll(): Promise<Client[]>;
  findByEmail(email: string): Promise<Client | undefined>;
  findById(id: string): Promise<Client | undefined>;
  createClient(data: CreateClientDTO): Promise<Client>;
  updateUser(cliente: Client): Promise<Client>;
}
