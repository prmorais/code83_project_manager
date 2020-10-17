import IClientRepository from '../repositories/IClientRepository';
import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';
import AppError from '../erros/AppError';

interface request {
  name: string;
  email: string;
  telephone: string;
  cpf: string;
}

class CreateClientService {
  private clientRepository: IClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  public async execute(data: request): Promise<Client> {
    const verifyClient = await this.clientRepository.findByEmail(data.email);

    if (verifyClient) {
      throw new AppError('Email já cadastrado', 400);
    }

    const cliente = await this.clientRepository.createClient({
      ...data,
    });

    return cliente;
  }
}

export default CreateClientService;
