import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    // const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({
      ...req.body,
    });

    delete user.password;

    return res.json(user);
  }
}

export default UserController;
