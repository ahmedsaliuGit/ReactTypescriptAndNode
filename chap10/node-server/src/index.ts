import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const port = 8000;

server.listen({ port }, () => {
  console.log(`Our server started and listen on port:::${port}`);
});
