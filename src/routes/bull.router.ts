import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import { Router } from 'express';
import config from '../config';
import { queuesForBullDashboard } from '../services/redis/queue/dashboard';

const bullRouter = Router();

if (config.NODE_ENV === 'development' || config.NODE_ENV === 'staging' || config.NODE_ENV === 'production') {
  const bullQueues = Object.values(
    queuesForBullDashboard
  ).map(
    (queue) => queue && new BullAdapter(queue)
  ).filter((queue) => queue !== undefined) as BullAdapter[];
  const { router: bullRouterHandler } = createBullBoard(bullQueues);
  bullRouter.use('/', bullRouterHandler);
}

export default bullRouter;
