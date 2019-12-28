import http from "http";
import app from "../app";
import loadDB from "../db";
import * as config from "../config";

const server = http.createServer(app);

(async () => {
  await loadDB(config.db);

  server.listen(config.server.port, () => {
    console.log(`Sympo is up and running at port ${config.server.port}!`);
  });
})();
