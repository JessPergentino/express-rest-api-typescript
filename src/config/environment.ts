import { IEnvironment } from '@api/interfaces/environment.interface';
import convertNumber from '@utils/converters';
import dotenv from 'dotenv';

dotenv.config();

const environment: IEnvironment = {
  app: {
    port: convertNumber(process.env.API_PORT, 3000),
  },
  db: {
    database: process.env.DATABASE || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || '',
    dialect: process.env.DB_DIALECT || '',
  },
};

export default environment;
