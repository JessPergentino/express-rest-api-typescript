export class ErrorModel extends Error {
  readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Errors
export enum ErrorTypes {
  TYPE_ERROR_NOT_FOUND = 'ErrorNotFound',
  TYPE_ERROR_INVALID_PRODUCT = 'Produto Inválido',
}
