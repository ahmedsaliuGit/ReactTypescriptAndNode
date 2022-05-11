import express from "express";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import session from "express-session";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import typeDefs from "./gql/typeDefs";
import resolvers from "./gql/resolvers";
import { loadEnv } from "./common/envLoader";
loadEnv();

declare module "express-session" {
  export interface Session {
    userId: any;
    test: any;
  }
}

const main = async () => {
  const app = express();
  app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
  const router = express.Router();
  const port = process.env.SERVER_PORT;

  await createConnection();
  const redis = new Redis({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  });

  const RedisStore = connectRedis(session);
  const redisStore = new RedisStore({ client: redis });

  app.use(bodyParser.json());

  app.use(
    session({
      store: redisStore,
      name: process.env.COOKIE_NAME,
      sameSite: "Strict",
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
      },
    } as any)
  );

  app.use(router);

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res }),
  });
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port }, () => {
    console.log(`Server running on port:: ${port}`);
  });
};

main();
