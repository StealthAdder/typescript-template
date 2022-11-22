import { LogEventType, LoggerLevel } from './logger';

interface StringifyParams {
  logEventType: LogEventType;
  message: string;
  level: LoggerLevel;
  [key: string]: any;
  service: string;
  method: string;
}

const stringifyLogableData = (data: StringifyParams) => {
  if (data instanceof Error) {
    return data.message as string;
  }
  if (typeof data === 'object') {
    return JSON.stringify(data);
  }
  return data as string;
};

export default stringifyLogableData;
