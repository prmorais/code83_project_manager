import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../erros/AppError';
import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

interface request {
  email: string;
  password: string;
}

interface response {
  token: string;
  user: User;
}

class SessionService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ email, password }: request): Promise<response> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Usuário e/ou Senha inválido', 401);
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new AppError('Usuário e/ou Senha inválido', 401);
    }

    if (!user.active) {
      throw new AppError('Usuário inativo', 401);
    }

    const token = sign({}, process.env.APP_SECRET as string, {
      expiresIn: '1d',
    });

    delete user.password;

    return {
      token,
      user,
    };
  }
}

export default SessionService;
