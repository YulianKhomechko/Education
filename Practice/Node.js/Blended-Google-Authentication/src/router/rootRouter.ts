import { Router } from 'express';
import { authRouter } from './authRouter';
import { userRouter } from './userRouter';

const router = Router();

router.get('/home', (req, res, next) => {
  res.render('pages/home', { user: req.user });
});

router.use('/auth', authRouter);

router.use('/user', userRouter);

export { router as rootRouter };
