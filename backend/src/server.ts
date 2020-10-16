import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';

import './database';
import AppError from './erros/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3000, () => console.log('Servidor rodando na porta:', 3000));
