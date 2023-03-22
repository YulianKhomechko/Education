import { ErrorRequestHandler } from 'express';

export const errorHandlerMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  res.status(500).json({ message: error.message });
};
