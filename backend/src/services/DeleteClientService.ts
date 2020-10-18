import IClientRepository from '../repositories/IClientRepository';
import ClientRepository from '../repositories/ClientRepository';
import AppError from '../erros/AppError';

class DeleteClientService {
  private clientRepository: IClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  public async execute(id: string): Promise<void> {
    const verifyClient = await this.clientRepository.findById(id);

    if (!verifyClient) {
      throw new AppError('Cliente não encontrado', 404);
    }

    await this.clientRepository.deleteClient(id);
  }
}

export default DeleteClientService;
