import mongoose from 'mongoose';
import cluster from 'cluster';
import os from 'os';
import app from './app';
import logger from './utils/logger';
import config from './config';

(async () => {
  logger.console.log('Connecting to Database...');
  await mongoose.connect(config.MONGO_URL);
  logger.console.log('DB connected');

  const numCPUs = process.env.NODE_ENV === 'production' ? os.cpus().length : 1;
  if (cluster.isMaster) {
    logger.console.log(`Master ${process.pid} is running`);

    // Fork workers...
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker) => {
      logger.console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    const normalizePort = (val: any) => {
      const port = parseInt(val, 10);

      if (Number.isNaN(port)) {
        // Named pipe
        return val;
      }

      if (port >= 0) {
        // Port number
        return port;
      }

      return false;
    };

    const port = normalizePort(process.env.PORT || '4000');

    const onError = (error: any) => {
      if (error.syscall !== 'listen') {
        throw error;
      }

      const bind = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;
      switch (error.code) {
        case 'EACCES':
          logger.console.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          logger.console.error(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    };

    app.on('error', onError);
    const onListening = () => {
      const bind = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;
      logger.console.log(`Listening on ${bind}`);
      logger.console.log('Connected!');
    };

    app.listen(port, onListening);
    logger.console.log(`Worker ${process.pid} started`);
  }
})();
