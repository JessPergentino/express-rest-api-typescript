import dotenv from 'dotenv';
import { IEnvironment } from '../api/interfaces/environment.interface';
import convertNumber from '../utils/converters';

dotenv.config();

const environment: IEnvironment = {
  app: {
    port: convertNumber(process.env.API_PORT, 3000),
  },
};

export default environment;
