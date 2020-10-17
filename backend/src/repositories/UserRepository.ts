import { getRepository, Repository } from 'typeorm';
import IUserRepository from './IUserRepository';
import User from '../models/User';
import CreateUserDTO from '../dtos/createUserDTO';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async createUser(data: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      ...data,
    });

    await this.ormRepository.save(user);
    return user;
  }

  public async updateUser(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
