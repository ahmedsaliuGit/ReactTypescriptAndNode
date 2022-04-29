import express from "express";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import session from "express-session";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import { login, logout, register } from "./repo/UserRepo";
import {
  createThread,
  getThreadById,
  getThreadsByCategoryId,
} from "./repo/ThreadRepo";

declare module "express-session" {
  export interface Session {
    userId: any;
    test: any;
  }
}

console.log(process.env.NODE_ENV);
require("dotenv").config();

const main = async () => {
  const app = express();
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
  router.get("/", (req, res, next) => {
    req.session!.test = "Hello";
    res.send("Hello");
  });

  router.post("/register", async (req, res, next) => {
    try {
      console.log(req.body);
      const { email, username, password } = req.body;
      const userResult = await register(email, username, password);

      if (userResult && userResult.user) {
        res.send(`New user was created. userId: ${userResult.user.id}`);
      } else if (userResult && userResult.messages) {
        res.send(userResult.messages[0]);
      } else {
        next();
      }
    } catch (err) {
      res.send(err.message);
    }
  });

  // Login
  router.post("/login", async (req, res, next) => {
    try {
      console.log(req.body);
      const { username, password } = req.body;
      const userResult = await login(username, password);

      if (userResult && userResult.user) {
        req.session!.userId = userResult.user?.id;
        res.send(`User login successfully. userId: ${userResult.user?.id}`);
      } else if (userResult && userResult.messages) {
        res.send(userResult.messages);
      } else {
        next();
      }
    } catch (err) {
      res.send(err.message);
    }
  });

  // Logout
  router.post("/logout", async (req, res, next) => {
    try {
      console.log("params", req.body);
      const msg = await logout(req.body.userName);
      if (msg) {
        req.session!.userId = null;
        res.send(msg);
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  });
  // Auth end here

  // Thread start here
  router.post("/createThread", async (req, res, next) => {
    try {
      console.log("Params session", req.session);
      console.log("Params body", req.body);
      const { categoryId, title, body } = req.body;

      const result = await createThread(
        req.session!.userId,
        categoryId,
        title,
        body
      );

      res.send(result);
    } catch (err) {
      console.log(err.message);
      res.send(err.message);
    }
  });

  router.post("/threadbycategory", async (req, res, next) => {
    try {
      const { categoryId } = req.body;
      const threadResult = await getThreadsByCategoryId(categoryId);

      if (threadResult && threadResult.entities) {
        let items = "";
        threadResult.entities.forEach((th) => {
          items += th.title + ", ";
        });
        res.send(items);
      } else if (threadResult && threadResult.messages) {
        res.send(threadResult.messages[0]);
      } else {
        next();
      }
    } catch (err) {
      console.log(err.message);
      res.send(err.message);
    }
  });

  router.post("/thread", async (req, res, next) => {
    try {
      const { threadId } = req.body;
      const threadResult = await getThreadById(threadId);

      if (threadResult && threadResult.entity) {
        res.send(threadResult.entity.title);
      } else if (threadResult && threadResult.messages) {
        res.send(threadResult.messages[0]);
      } else {
        next();
      }
    } catch (err) {
      console.log(err.message);
      res.send(err.message);
    }
  });

  app.listen({ port }, () => {
    console.log(`Server running on port:: ${port}`);
  });
};

main();
