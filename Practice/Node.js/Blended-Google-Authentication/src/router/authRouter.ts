import { Router } from 'express';
import { loginController, logoutController } from '../controllers/authControllers';
import { passport } from '../services/passport';

const router = Router();

router.get('/login', loginController);

router.get('/logout', logoutController);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/redirect',
  passport.authenticate('google', { successRedirect: '/user/profile', failureRedirect: '/home' })
);

export { router as authRouter };
