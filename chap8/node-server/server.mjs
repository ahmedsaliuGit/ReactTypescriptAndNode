import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Server response:: Hello there!");
  } else if (req.url === "/a") {
    res.end("Welcome to route A");
  } else if (req.url === "/b") {
    res.end("Welcome to route B");
  } else if (req.url === "/c" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const params = Buffer.concat(body);
      console.log(params.toString());
      res.end(`We have received this data from you ${params.toString()}`);
    });
  } else {
    res.end("Lagbaja nothing for you");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`The server started on port:: ${port}`);
});
