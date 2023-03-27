import { RequestHandler } from 'express';

const publicRoutes = ['/home', '/auth/login', '/auth/google', '/auth/google/redirect', '/signup'];

const checkIfRouteIsAllowed = (url: string) => publicRoutes.some((route) => new RegExp(`^${route}`).test(url));

export const auth: RequestHandler = (req, res, next) => {
  if (checkIfRouteIsAllowed(req.url)) {
    return next();
  }

  if (!req.user) {
    return res.redirect('/auth/login');
  }

  next();
};
