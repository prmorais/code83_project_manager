import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Conexão com banco de dados bem sucedida'));
