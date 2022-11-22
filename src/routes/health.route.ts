import { Router } from 'express';
import helloWorld from '../controllers/hello.controller';

const router = Router();

router.get('/', helloWorld);

export default router;
