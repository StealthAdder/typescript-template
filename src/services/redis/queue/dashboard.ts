import loggerQueue from './logger.queue';

// eslint-disable-next-line import/prefer-default-export
export const queuesForBullDashboard = {
  loggerQueue: loggerQueue.getQueue()
};
