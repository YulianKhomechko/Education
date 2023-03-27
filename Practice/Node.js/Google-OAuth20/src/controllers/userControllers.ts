import { RequestHandler } from 'express';

export const userProfileController: RequestHandler = (req, res, next) => {
  res.render('pages/profile', { user: req.user });
};
