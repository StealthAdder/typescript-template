import Bull from 'bull';
import redisMock from 'redis-mock';
import config from '../../../config';

const redisMockClient = redisMock.createClient();

export const BULL_REDIS_CLIENT_OPTIONS = {
  host: config.REDIS_HOST,
  port: Number(config.REDIS_PORT),
};

export const BULL_REDIS_CLIENT = config.NODE_ENV === 'test' ? redisMockClient.options : BULL_REDIS_CLIENT_OPTIONS;

// eslint-disable-next-line import/prefer-default-export
export const BULL_JOB_DEFAULT_PARAMS: Bull.JobOptions = {
  removeOnComplete: true,
  removeOnFail: true,
  attempts: 5,
};
