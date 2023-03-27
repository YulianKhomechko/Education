export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message = 'Something went wrong, please try again later...') {
    super(message);
    this.statusCode = statusCode || 500;
  }
}
