import { NextFunction, Request, Response } from 'express';
import { ErrorTypes } from '../api/errors/error';

const handleError = (error: any, _req: Request, res: Response, next: NextFunction): void => {
  switch (error.name) {
    case ErrorTypes.TYPE_ERROR_NOT_FOUND:
      res.status(error.statusCode || 500);
      res.json({
        status: 'error',
        message: error.message,
        source: error.source,
      });
      next();
      break;

    default:
      res.status(500);
      res.json({
        status: 'error',
        message: error.message,
      });
      next();
  }
};

export default handleError;
