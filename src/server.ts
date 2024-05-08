import DataBase from '@config/db';
import environment from '@config/environment';
import { logger } from '@config/logger';
import app from 'app';

DataBase.sync()
  .then(() => {
    app.listen(environment.app.port, () => logger.info(`app listening on port ${environment.app.port}`));
  })
  .catch(error => {
    logger.error(error);
  });
