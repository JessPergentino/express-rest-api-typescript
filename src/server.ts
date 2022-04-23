import app from './app';
import environment from './config/environment';
import DataBase from './db';

DataBase.sync()
  .then(() => {
    app.listen(environment.app.port, () => console.log(`app listening on port ${environment.app.port}`));
  })
  .catch(error => {
    console.log(error);
  });
