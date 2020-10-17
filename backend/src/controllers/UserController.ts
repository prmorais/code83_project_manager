import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import EnableUserService from '../services/EnableUserService';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.json(user);
  }

  public async enable(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const userRepository = new UserRepository();
    const enableUser = new EnableUserService(userRepository);

    const user = await enableUser.execute({
      id,
    });

    delete user.password;

    return res.json(user);
  }
}

export default UserController;
