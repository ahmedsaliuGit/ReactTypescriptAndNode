import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("First middleware");
  throw new Error("A failure occurred");
});

app.use(router);

router.get("/a", (req, res) => {
  res.send("Welcome to route A");
});

router.post("/c", (req, res) => {
  res.send("Hello this is route c. Message is" + req.body.message);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

const port = 8000;
app.listen({ port }, () => {
  console.log(`The express node server started on port::${port}`);
});
