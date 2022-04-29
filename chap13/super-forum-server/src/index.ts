import express from "express";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import session from "express-session";

declare module "express-session" {
  export interface Session {
    userid: any;
    loadedCount: any;
  }
}

console.log(process.env.NODE_ENV);
require("dotenv").config();

const app = express();
const router = express.Router();
const port = process.env.SERVER_PORT;

const redis = new Redis({
  port: Number(process.env.REDIS_PORT),
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
});

const RedisStore = connectRedis(session);
const redisStore = new RedisStore({ client: redis });

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
  if (!req.session!.userid) {
    req.session!.userid = req.query.userid;
    console.log("Userid is set");
    req.session!.loadedCount = 0;
  } else {
    req.session!.loadedCount = Number(req.session!.loadedCount) + 1;
  }

  res.send(
    `Userid: ${req.session!.userid} loaded: ${req.session!.loadedCount}`
  );
});

app.listen({ port }, () => {
  console.log(`Server running on port:: ${port}`);
});
