/* eslint-disable no-unused-vars */
import Bull from 'bull';
import { BULL_JOB_DEFAULT_PARAMS } from '.';
import { LoggerLevel } from '../../../utils/logger';
import developmentLogger from '../../../utils/logger/development.logger';
// import productionLogger from '../../../utils/logger/production.logger';
import BullQueueBaseClass from './base-class';

const winstonLogger = developmentLogger;

interface Params {
  type: LoggerLevel;
  str: string;
  meta?: any;
}

class LoggerQueue extends BullQueueBaseClass<Params> {
  constructor() {
    super('logs', {
      limiter: {
        max: 100,
        duration: 1000,
      },
      defaultJobOptions: BULL_JOB_DEFAULT_PARAMS,
    });
    this.initializeQueueProcessor();
  }

  process = (job: Bull.Job<Params>) => {
    winstonLogger[job.data.type](job.data.str, job.data.meta);
    return 1;
  };
}

export default new LoggerQueue();
