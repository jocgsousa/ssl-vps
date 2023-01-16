import express, { Router } from "express";
import fs from "fs";
import { createServer } from "https";
// import { createServer } from "http";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

const config = {
  key: "",
  cert: "",
};

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.use(routes);

const server = createServer(config, app);

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server listen in port: ${process.env.PORT || 8080}`);
});
