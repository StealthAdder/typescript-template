import type { Request } from 'express';
import os from 'os';
import type { ResponseType as Response } from '@ineuronintelligence/node-common';
// @ts-expect-error
import pjson from '../../package.json';

const helloWorld = async (req: Request, res: Response) => {
  const { version, name } = pjson;
  return res.json({
    message: 'Hello Players - iNeuron.ai',
    data: {
      name,
      version: `v${version}`,
      environment: process.env.NODE_ENV,
      instance: os.hostname().substring(0, 4),
    },
    statusCode: 200,
    success: true,
  });
};

export default helloWorld;
