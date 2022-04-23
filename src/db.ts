import { Dialect, Sequelize } from 'sequelize';
import environment from './config/environment';

const DataBase = new Sequelize(environment.db.database, environment.db.username, environment.db.password, {
  host: environment.db.host,
  dialect: environment.db.dialect as Dialect,
});

export default DataBase;
