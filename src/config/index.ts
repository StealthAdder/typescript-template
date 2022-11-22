import dotenv from 'dotenv';

dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV!,
  MONGO_URL: process.env.MONGO_URL!,
  APPLICATION_NAME: process.env.APPLICATION_NAME!,
  REDIS_HOST: process.env.REDIS_HOST!,
  REDIS_PORT: Number(process.env.REDIS_PORT!),
};

export default config;
