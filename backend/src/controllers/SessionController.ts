import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import SessionService from '../services/SessionService';

class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    // const { email, password } = req.body;

    const userRepository = new UserRepository();
    const createSession = new SessionService(userRepository);

    const session = await createSession.execute({
      ...req.body,
    });

    return res.json(session);
  }
}

export default SessionController;
