import { ErrorTypes } from '@api/errors/error';
import { NextFunction, Request, Response } from 'express';

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
    case ErrorTypes.TYPE_ERROR_INVALID_PRODUCT:
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
