import User from '../models/User';
import CreateUserDTO from '../dtos/createUserDTO';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  createUser(data: CreateUserDTO): Promise<User>;
}
