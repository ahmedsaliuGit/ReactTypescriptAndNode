import express from "express";
import { ApolloServer, PubSub } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { createServer } from "http";
import { applyMiddleware } from "graphql-middleware";
import { log } from "./logger";

const app = express();
const pubsub = new PubSub();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const schemaWithMiddleware = applyMiddleware(schema, log);

const apolloServer = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req, res }: any) => ({ req, res, pubsub }),
});
apolloServer.applyMiddleware({ app, cors: false });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 8000 }, () => {
  console.log("GraphQL server ready." + apolloServer.graphqlPath);
  console.log("GraphQL sub server ready." + apolloServer.subscriptionsPath);
});
