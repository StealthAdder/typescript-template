import { Router } from 'express';
import bullRouter from './bull.router';
import healthRouter from './health.route';

const router = Router();
router.use('/', healthRouter);
router.use('/bull', bullRouter);

export default router;
