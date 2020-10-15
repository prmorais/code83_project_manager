import { getRepository, Repository } from 'typeorm';
import IUserRepository from './IUserRepository';
import User from '../models/User';
import CreateUserDTO from '../dtos/createUserDTO';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(email);
    return user;
  }

  public async createUser(data: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      ...data,
    });

    await this.ormRepository.save(user);
    return user;
  }
}

export default UserRepository;
