// import winston, { format } from 'winston';
// // // @ts-expect-error
// // import CloudWatchTransport from 'winston-aws-cloudwatch';
// // @ts-expect-error
// import WinstonLogStash from 'winston3-logstash-transport';
// import config from '../../config';
// // import { getCurrentFormattedDate } from '../date.util';

// const { combine, timestamp, printf } = format;

// const myFormat = printf(({ level, message, timestamp }) => `${level} ${timestamp} : ${message}`);

// export default winston.createLogger({
//   level: 'debug',
//   format: combine(
//     format.colorize(),
//     timestamp({ format: 'HH:mm:ss' }),
//     myFormat,
//   ),
//   transports: [
//     new winston.transports.Console(),
//     // new CloudWatchTransport({
//     //   logGroupName: config.CLOUDWATCH_LOG_GROUP_NAME,
//     //   logStreamName: getCurrentFormattedDate(),
//     //   createLogGroup: true,
//     //   createLogStream: true,
//     //   submissionInterval: 2000,
//     //   submissionRetryCount: 1,
//     //   batchSize: 20,
//     //   awsConfig: {
//     //     accessKeyId: config.CLOUDWATCH_LOGS_ID,
//     //     secretAccessKey: config.CLOUDWATCH_LOGS_SECRET,
//     //     region: config.CLOUDWATCH_LOGS_REGION,
//     //   },
//     //   formatLog: (item: any) => `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`,
//     // }),
//     new WinstonLogStash({
//       mode: 'udp',
//       host: config.LOGSTASH_HOST,
//       port: Number(config.LOGSTASH_PORT)
//     }),
//   ],
// });
