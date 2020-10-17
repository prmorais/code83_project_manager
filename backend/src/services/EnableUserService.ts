import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';
import AppError from '../erros/AppError';

interface request {
  id: string;
}

class EnableUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ id }: request): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    user.active = !user.active;

    await this.userRepository.updateUser(user);

    return user;
  }
}

export default EnableUserService;
