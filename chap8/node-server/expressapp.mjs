import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use(router);

router.get("/api/v1/users", (req, res) => {
  const users = [
    { id: 1, username: "Ahmed" },
    { id: 2, username: "Linda" },
    { id: 3, username: "John" },
  ];

  console.log(req.query.userid);
  const user = users.find((user) => user.id == req.query.userid);
  res.send(`User ${user?.username}`);
});

router.post("/api/v1/groups", (req, res) => {
  const groups = [
    { id: 1, groupName: "Admin" },
    { id: 2, groupName: "Staff" },
    { id: 3, groupName: "User" },
  ];

  const group = groups.find((user) => user.id == req.body.id);
  res.send(`Group Name: ${group?.groupName}`);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

const port = 8000;
app.listen({ port }, () => {
  console.log(`The express node server started on port::${port}`);
});
