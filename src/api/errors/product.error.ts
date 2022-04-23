import { ErrorModel, ErrorTypes } from './error';

export class ProductError extends ErrorModel {
  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = ErrorTypes.TYPE_ERROR_INVALID_PRODUCT;
  }
}
