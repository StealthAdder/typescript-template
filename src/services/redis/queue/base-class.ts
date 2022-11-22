import Bull from 'bull';
import { BULL_REDIS_CLIENT } from '.';
import config from '../../../config';

export default abstract class BullQueueBaseClass<T> {
  protected queue: Bull.Queue | undefined;

  constructor(queueName: string, options?: Bull.QueueOptions) {
    if (config.NODE_ENV === 'test') return;
    this.queue = new Bull(`${queueName}_${config.APPLICATION_NAME}`, {
      redis: {
        ...BULL_REDIS_CLIENT,
      },
      ...options
    });
  }

  // eslint-disable-next-line no-unused-vars
  add(data: T, options?: Bull.JobOptions) {
    return this.queue?.add(data, options);
  }

  // eslint-disable-next-line no-unused-vars
  abstract process: (job: Bull.Job<T>) => any;

  getQueue() {
    return this.queue;
  }

  initializeQueueProcessor() {
    this.queue?.process(this.process);
  }
}
