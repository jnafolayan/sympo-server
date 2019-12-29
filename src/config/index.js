import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import joi from "joi";
import getDBEnv from "./db";
import getServerEnv from "./server";
import getJWTEnv from "./jwt";
import getPusherEnv from "./pusher";

// load the correct environment
const envFile = (() => {
  switch (process.env.NODE_ENV) {
    case "production":
      return ".env.live";
    case "staging":
      return ".env.staging";
    case "development":
    default:
      return ".env.local";
  }
})();

if (envFile) {
  try {
    const inFile = path.resolve(__dirname, "../../", envFile);
    const outFile = path.resolve(__dirname, "../../", ".env");
    const content = fs.readFileSync(inFile, "utf-8");
    fs.writeFileSync(outFile, content);
  } catch (err) {
    console.log("Could not load environment");
    process.exit(0);
  }
}

dotenv.config();

const env = process.env;
const db = getDBEnv({ joi, env });
const server = getServerEnv({ joi, env });
const jwt = getJWTEnv({ joi, env });
const pusher = getPusherEnv({ joi, env });

export { db, server, jwt, pusher };
