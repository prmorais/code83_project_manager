import express from 'express';

import './database';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({ message: 'Olá doido.' }));

app.listen(3000, () => console.log('Servidor rodando na porta:', 3000));
