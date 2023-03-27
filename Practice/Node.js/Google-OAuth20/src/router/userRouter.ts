import { Router } from 'express';
import { userProfileController } from '../controllers/userControllers';

const router = Router();

router.get('/profile', userProfileController);

export { router as userRouter };
