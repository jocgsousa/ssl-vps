import express, { Router } from "express";
import fs from "fs";
import path from "path";
import { createServer } from "https";
// import { createServer } from "http";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname, { dotfiles: "allow" }));

// const config = {
//   key: fs.readFileSync(path.join(__dirname, "certs", "key.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "certs", "cert.pem")),
// };

// Certificate
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/schhsoinbit.ga/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/schhsoinbit.ga/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/schhsoinbit.ga/fullchain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.use(routes);

const server = createServer(credentials, app);

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server listen in port: ${process.env.PORT || 8080}`);
});