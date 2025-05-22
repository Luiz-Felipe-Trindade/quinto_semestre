// import { createServer } from "node:https";

// const server = createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   res.end("Hello World");
// });

// server.listen(8080, "127.0.0.1", () => {
//   console.log("Ouvindo em 127.0.0.1:8080");
// });

import express from "express";
import router from "./src/routers/index.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Bonna Pettit Bitch");
});

app.listen(port, () => {
  console.log(`Ouvindo em http://localhost:${port}`);
});
