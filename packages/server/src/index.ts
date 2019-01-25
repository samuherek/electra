import 'reflect-metadata';
require('dotenv-safe').config();

import { ApolloServer } from 'apollo-server-express';
import * as connectRedis from 'connect-redis';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';

import { GraphQLError, GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { redisSessionPrefix } from './constants';
import { createTypeormConn } from './createTypeormConn';
import { redis } from './redis';

const RedisStore = connectRedis(session);

const startServer = async () => {
  await createTypeormConn();

  const app = express();

  const server = new ApolloServer({
    context: ({ req, res }: any) => ({
      redis,
      req,
      res,
      url: req.protocol + '://' + req.get('host'),
    }),
    formatError: (error: GraphQLError) => {
      return error;
    },
    schema: (await buildSchema({
      authChecker: ({ context }) => {
        return context.req.session && context.req.session.userId; // or false if access denied
      },
      resolvers: [__dirname + '/resolvers/**/**.ts'],
    })) as GraphQLSchema | undefined,
  });

  app.use(
    session({
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
        secure: process.env.NODE_ENV === 'production',
      },
      name: 'qid',
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix,
      }),
    } as any)
  );

  app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
    })
  );

  // Comment: This is necessary to overwrite the cors otherwise it gives it "*" and then it doesn't work. https://github.com/expressjs/cors/issues/134
  server.applyMiddleware({
    app,
    cors: false,
    path: '/',
  });

  app.set('trust proxy', 1);

  server.applyMiddleware({ app }); // app is from an existing express app

  // app.get('/confirm/:id', confirmEmail);

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
