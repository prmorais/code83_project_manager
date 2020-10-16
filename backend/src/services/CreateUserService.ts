import { hash } from 'bcryptjs';
import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

interface request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ name, email, password }: request): Promise<User> {
    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.createUser({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;
