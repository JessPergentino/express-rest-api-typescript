import app from './app';
import environment from './config/environment';
import DataBase from './config/db';
import { logger } from './config/logger';

DataBase.sync()
  .then(() => {
    app.listen(environment.app.port, () => logger.info(`app listening on port ${environment.app.port}`));
  })
  .catch(error => {
    logger.error(error);
  });
