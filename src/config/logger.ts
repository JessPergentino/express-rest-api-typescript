import pino from 'pino';
import PinoHttp from 'pino-http';

const logger = pino();

const pinoHttp = PinoHttp({
  // Define a custom logger level
  customLogLevel: function (_req, res, err) {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return 'warn';
    } else if (res.statusCode >= 500 || err) {
      return 'error';
    } else if (res.statusCode >= 300 && res.statusCode < 400) {
      return 'silent';
    }
    return 'info';
  },
  // Define a custom success message
  customSuccessMessage: function (req, res) {
    if (res.statusCode === 404) {
      return 'resource not found';
    }
    return `${req.method} completed`;
  },
  // Define a custom error message
  customErrorMessage: function (_req, res, _err) {
    return 'request errored with status code: ' + res.statusCode;
  },
  quietReqLogger: true,
});

export { logger, pinoHttp };
