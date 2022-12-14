/* eslint-disable no-unused-vars */
import loggerQueue from '../../services/redis/queue/logger.queue';

export enum LoggerLevel {
  info = 'info',
  error = 'error',
  warn = 'warn',
}

export enum LogEventType {
  ERR_ARNOLDTERMINATOR_BOII = 'ERR_ARNOLDTERMINATOR_BOII',
  ERR_MASTER_SERVER_NOT_FOUND = 'ERR_MASTER_SERVER_NOT_FOUND',
  ERR_GET_USABLE_WORKER_SERVER = 'ERR_GET_USABLE_WORKER_SERVER',
  INFO_WORKER_SERVER_CAN_BE_TERMINATED = 'INFO_WORKER_SERVER_CAN_BE_TERMINATED',
  INFO_WORKER_SERVER_TERMINATED = 'INFO_WORKER_SERVER_TERMINATED',
  INFO_WORKER_SERVER_TERMINATION_REQUEST_CREATED = 'INFO_WORKER_SERVER_TERMINATION_REQUEST_CREATED',
  ERR_AUTOSCALING_CRON_JOB = 'ERR_AUTOSCALING_CRON_JOB',
  INFO_WORKER_SERVER_ONLINE = 'INFO_WORKER_SERVER_ONLINE',
  INFO_RE_COMISSIONED_OLD_WORKER_SERVER = 'INFO_RE_COMISSIONED_OLD_WORKER_SERVER',
  INFO_LAUNCHING_NEW_WORKER_SERVER = 'INFO_LAUNCHING_NEW_WORKER_SERVER',
  INFO_WORKER_SERVER_LAUNCH_REQUEST_EXISTS = 'INFO_WORKER_SERVER_LAUNCH_REQUEST_EXISTS',
  ERR_LAUNCH_TEMPLATE_NOT_FOUND = 'ERR_LAUNCH_TEMPLATE_NOT_FOUND',
  ERR_WORKER_SERVER_LAUNCH_REQUEST_FAILED = 'ERR_WORKER_SERVER_LAUNCH_REQUEST_FAILED',
  INFO_WORKER_SERVER_LAUNCH_REQUEST_CREATED = 'INFO_WORKER_SERVER_LAUNCH_REQUEST_CREATED',
  ERR_AUTOSCALING_CHECK = 'ERR_AUTOSCALING_CHECK',
  INFO_HEARTBEAT_FROM_MASTER_SERVER = 'INFO_HEARTBEAT_FROM_MASTER_SERVER',
  INFO_HEARTBEAT_FROM_WORKER_SERVER = 'INFO_HEARTBEAT_FROM_WORKER_SERVER',
  ERR_SET_CAN_SPAWN_NEW_CONTAINERS = 'ERR_SET_CAN_SPAWN_NEW_CONTAINERS',
  INFO_DECOMMISSIONED_WORKER_SERVER = 'INFO_DECOMMISSIONED_WORKER_SERVER',
  WARN_WORKER_SERVER_RECORD_NOT_FOUND = 'WARN_WORKER_SERVER_RECORD_NOT_FOUND',
  INFO_CREATED_RECORD_OF_NEW_WORKER_SERVER = 'INFO_CREATED_RECORD_OF_NEW_WORKER_SERVER',
  INFO_WORKER_SERVER_VERSION_MISMATCH = 'INFO_WORKER_SERVER_VERSION_MISMATCH',
  INFO_DECOMMISSION_OLD_VERSION_WORKER_SERVER = 'INFO_DECOMMISSION_OLD_VERSION_WORKER_SERVER',
  ERR_UPDATE_WORKER_SERVER_METRICS_WITH_HEART_BEAT = 'ERR_UPDATE_WORKER_SERVER_METRICS_WITH_HEART_BEAT',
  ERR_CREATE_WORKER_SERVER_METRICS = 'ERR_CREATE_WORKER_SERVER_METRICS',
  INFO_SPAWN_CONTAINER_REQUEST_SENT = 'INFO_SPAWN_CONTAINER_REQUEST_SENT',
  ERR_SPAWN_CONTAINER_ON_USABLE_WORKER_SERVER = 'ERR_SPAWN_CONTAINER_ON_USABLE_WORKER_SERVER',
  INFO_RESPAWN_CONTAINER_REQUEST_SENT = 'INFO_RESPAWN_CONTAINER_REQUEST_SENT',
  ERR_RESPAWN_CONTAINER_ON_USABLE_WORKER_SERVER = 'ERR_RESPAWN_CONTAINER_ON_USABLE_WORKER_SERVER',
  INFO_NEW_USER_PLAYGROUND_CREATED = 'INFO_NEW_USER_PLAYGROUND_CREATED',
  INFO_USER_PLAYGROUND_RESPAWNED = 'INFO_USER_PLAYGROUND_RESPAWNED',
  INFO_CONTAINER_UPTIME_LIMIT_REACHED = 'INFO_CONTAINER_UPTIME_LIMIT_REACHED',
  INFO_CONTAINER_METRICS_UPDATED = 'INFO_CONTAINER_METRICS_UPDATED',
  ERR_CONTAINER_METRICS_UPDATE = 'ERR_CONTAINER_METRICS_UPDATE',
  ERR_CONTAINER_SPAWNED_METRICS_UPDATE = 'ERR_CONTAINER_SPAWNED_METRICS_UPDATE',
  ERR_CONTAINER_STATUS_UPDATE = 'ERR_CONTAINER_STATUS_UPDATE',
  INFO_TERMINATE_CONTAINER_REQUEST_SENT = 'INFO_TERMINATE_CONTAINER_REQUEST_SENT',
  ERR_REDIS = 'ERR_REDIS',
  ERR_CONTACT_MASTER_SERVER_CONSUMER = 'ERR_CONTACT_MASTER_SERVER_CONSUMER',
  INFO_CONTACTED_WORKER_SERVER = 'INFO_CONTACTED_WORKER_SERVER',
  ERR_CONTACTING_WORKER_SERVER = 'ERR_CONTACTING_WORKER_SERVER',
  ERR_MAX_CONTAINERS_PER_HOST_LIMIT_REACHED_REQUEST_HANDLER = 'ERR_MAX_CONTAINERS_PER_HOST_LIMIT_REACHED_REQUEST_HANDLER',
  ERR_FAILED_TO_SPAWN_CONTAINER_UPDATE_STATUS_REQUEST_HANDLER = 'ERR_FAILED_TO_SPAWN_CONTAINER_UPDATE_STATUS_REQUEST_HANDLER', ERR_HEART_BEAT_REQUEST_HANDLER = 'ERR_HEART_BEAT_REQUEST_HANDLER',
  ERR_CONTAINER_SPAWNED_REQUEST_HANDLER = 'ERR_CONTAINER_SPAWNED_REQUEST_HANDLER',
  ERR_UPDATE_CONTAINER_METRICS_REQUEST_HANDLER = 'ERR_UPDATE_CONTAINER_METRICS_REQUEST_HANDLER',
  ERR_WORKER_TERMINATED_CONTAINER_REQUEST_HANDLER = 'ERR_WORKER_TERMINATED_CONTAINER_REQUEST_HANDLER',
  ERR_GETTING_LATEST_LAUNCH_TEMPLATE_FOR_WORKER_SERVER = 'ERR_GETTING_LATEST_LAUNCH_TEMPLATE_FOR_WORKER_SERVER',
  ERR_WORKER_SERVER_TERMINATION_FAILED = 'ERR_WORKER_SERVER_TERMINATION_FAILED',
  ERR_TERMINATING_DECOMISSIONED_WORKER_SERVER = 'ERR_TERMINATING_DECOMISSIONED_WORKER_SERVER',
  ERR_SPAWN_REDIS_QUEUE = 'ERR_SPAWN_REDIS_QUEUE',
  ERR_RESPAWN_REDIS_QUEUE = 'ERR_RESPAWN_REDIS_QUEUE',
  INFO_TERMINATE_CONTAINER_IN_MINUTES_REACHED = 'INFO_CONTAINER_TERMINATE_IN_MINUTES_REACHED',
  ERR_FAILED_TO_SPAWN_CONTAINER_REQUEST_HANDLER = 'ERR_FAILED_TO_SPAWN_CONTAINER_REQUEST_HANDLER',
  ERR_POOLED_WORKER_SERVER_LAUNCH_REQUEST_FAILED = 'ERR_POOLED_WORKER_SERVER_LAUNCH_REQUEST_FAILED',
  INFO_POOLED_WORKER_SERVER_LAUNCH_REQUEST_CREATED = 'INFO_POOLED_WORKER_SERVER_LAUNCH_REQUEST_CREATED',
  INFO_PLAYGROUND_ALREADY_RUNNING = 'INFO_PLAYGROUND_ALREADY_RUNNING',
  ERR_WORKER_SERVER_LAUNCH_REQUEST_NOT_FOUND = 'ERR_WORKER_SERVER_LAUNCH_REQUEST_NOT_FOUND',
  INFO_WORKER_SERVER_DISSOCIATED_FROM_POOL = 'INFO_WORKER_SERVER_DISSOCIATED_FROM_POOL',
  ERR_WORKER_SERVER_DISSOCIATION_FROM_POOL_FAILED = 'ERR_WORKER_SERVER_DISSOCIATION_FROM_POOL_FAILED',
  ERR_FIND_USABLE_WORKER_WITH_ROUND_ROBIN = 'ERR_FIND_USABLE_WORKER_WITH_ROUND_ROBIN',
  ERR_LOGIN_FAILED = 'ERR_LOGIN_FAILED',
  ERR_SLACK_SERVICE = 'ERR_SLACK_SERVICE',
  ERR_DISCORD_SERVICE = 'ERR_DISCORD_SERVICE',
  ERR_PROMETHEUS_EXPLORER = 'ERR_PROMETHEUS_EXPLORER',
  ERR_SPARTAN_EXPLORER_CRON_JOB = 'ERR_SPARTAN_EXPLORER_CRON_JOB',
  ERR_TIMEOUT_CONTAINER = 'ERR_TIMEOUT_CONTAINER',
  ERR_TIMEOUT_CONTAINER_NOT_RUNNING = 'ERR_TIMEOUT_CONTAINER_NOT_RUNNING',
  INFO_PLAYGROUND_BACKUP_IN_PROGRESS = 'INFO_PLAYGROUND_BACKUP_IN_PROGRESS',
  INFO_UNDEAD_CONTAINER_UPDATE_METRICS_REQUEST = 'INFO_UNDEAD_CONTAINER_UPDATE_METRICS_REQUEST',
}

// eslint-disable-next-line max-len
// const winstonLogger = process.env.NODE_ENV !== 'production' ? developmentLogger : productionLogger;

// export default {
//   console,
//   async info(str: string, meta?: any) {
//     winstonLogger[LoggerLevel.info](str, meta);
//     // loggerPublisher({
//     //   type: LoggerLevel.info,
//     //   message: str,
//     // });
//   },
//   error(str: string) {
//     winstonLogger[LoggerLevel.error](str);
//     // loggerPublisher({
//     //   type: LoggerLevel.error,
//     //   message: str,
//     // });
//   },
//   warn(str: string) {
//     winstonLogger[LoggerLevel.warn](str);
//     // loggerPublisher({
//     //   type: LoggerLevel.warn,
//     //   message: str,
//     // });
//   },
// };

export default {
  console,
  info: (str: string, meta?: any) => {
    loggerQueue.add({
      type: LoggerLevel.info,
      str,
      meta: meta && { ...meta }
    });
  },
  error: (str: string) => {
    loggerQueue.add({
      type: LoggerLevel.error,
      str
    });
  },
  warn: (str: string) => {
    loggerQueue.add({
      type: LoggerLevel.warn,
      str
    });
  }
};
