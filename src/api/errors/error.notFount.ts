import { ErrorModel, ErrorTypes } from "./error";

export class ErrorNotFound extends ErrorModel {
  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = ErrorTypes.TYPE_ERROR_NOT_FOUND;
  }
}
