import express, { Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { ResponseType as Response, NotFoundError, errorHandler } from '@ineuronintelligence/node-common';
// @ts-ignore @IamAnkitSharma
import xss from 'xss-clean';
import routes from './routes';
import logger from './utils/logger';
import { getLocalIP } from './utils/system.util';

const app = express();
app.set('trust proxy', true);
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/public', express.static(`${__dirname}/public`));
app.use(express.json());
app.use(xss());
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  frameguard: false,
}));
app.use(mongoSanitize());
app.use(routes);

app.all('*', () => {
  throw new NotFoundError();
});

app.use((
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    logger.console.error(`Something went wrong: ${err.message} , Error - ${JSON.stringify(err)}`);
  }
  errorHandler(err, req, res, next);
});

logger.console.log(`Local IP - ${getLocalIP()}`);
app.use((
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.console.error(`Something went wrong: ${err.message}`);
  res.status(500).json({
    statusCode: 500,
    message: 'Something broke !!',
    success: false
  });
  next();
});

export default app;
