import app from './app';
import environment from './config/environment';

app.listen(environment.app.port, () => 'server running on port 3000');
