import 'reflect-metadata';
require('dotenv-safe').config();
import * as express from 'express';

import { createTypeormConn } from './createTypeormConn';

const startServer = async () => {
  await createTypeormConn();

  const app = express();

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000`)
  );
};

startServer();
