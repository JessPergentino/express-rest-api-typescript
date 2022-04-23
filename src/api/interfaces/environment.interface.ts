export interface IEnvironment {
  app: {
    port: number;
  };
  db: {
    database: string;
    username: string;
    password: string;
    host: string;
    dialect: string;
  };
}
