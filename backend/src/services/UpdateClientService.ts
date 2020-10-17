import IClientRepository from '../repositories/IClientRepository';
import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';
import AppError from '../erros/AppError';

interface request {
  id: string;
  name: string;
  email: string;
  telephone: string;
  cpf: string;
}

class UpdateClientService {
  private clientRepository: IClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  public async execute(data: request): Promise<Client> {
    const client = await this.clientRepository.findById(data.id);

    if (!client) {
      throw new AppError('Cliente não cadastrado', 404);
    }

    if (data.email !== client.email) {
      const verifyEmail = await this.clientRepository.findByEmail(data.email);

      if (verifyEmail) {
        throw new AppError('Email já cadastrado', 400);
      }
    }
    // client.name = data.name;
    // client.email = data.email;
    // client.telephone = data.telephone;
    // client.cpf = data.cpf;

    const cliente = await this.clientRepository.updateUser({
      ...client,
      ...data,
    });

    return cliente;
  }
}

export default UpdateClientService;
