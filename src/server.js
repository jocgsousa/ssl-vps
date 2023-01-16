import express, { Router } from "express";
import fs from "fs";
import https from "https";
import http from "http";

import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname, { dotfiles: "allow" }));

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

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(process.env.PORT_SSL || 443, () => {
  console.log(`Server listen in port: ${process.env.PORT || 8080}`);
});
