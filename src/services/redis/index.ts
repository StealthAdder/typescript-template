import { createClient } from 'redis';
import config from '../../config';
import logger, { LogEventType, LoggerLevel } from '../../utils/logger';
import stringifyLogableData from '../../utils/stringify.util';

const client = createClient({
  url: `redis://${config.REDIS_HOST}:${config.REDIS_PORT}`
});

client.on('error', (err) => logger.info(stringifyLogableData({
  message: 'Redis Error',
  error: err.message,
  level: LoggerLevel.error,
  service: 'redis',
  method: 'client.on',
  logEventType: LogEventType.ERR_REDIS
})));

if (config.NODE_ENV !== 'test') client.connect();

export const getFromCache = async (key: string) => client.get(key);

export const setToCache = async (
  key: string,
  value: string,
  expiry: number
) => {
  client.set(key, value);
  client.expire(key, expiry);
};

export const deleteFromCache = async (key: string) => client.del(key);

export default client;
