import { RequestHandler } from 'express';

export const loginController: RequestHandler = (req, res) => {
  if (req.user) {
    return res.redirect('/user/profile');
  }

  res.render('pages/login', { user: req.user });
};

export const logoutController: RequestHandler = (req, res) => {
  req.logout({ keepSessionInfo: false }, () => {
    return;
  });
  res.redirect('/home');
};
