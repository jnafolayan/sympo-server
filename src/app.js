import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import morgan from "morgan";
import logger from "./config/winston";
import userModule from "./modules/user";
import authModule from "./modules/auth";
import pollModule from "./modules/poll";
import commentModule from "./modules/comment";
import { verifyAuthController } from "./modules/auth/controllers";

const app = express();

// load global middlewares
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV != "staging")
  app.use(morgan("combined", { stream: logger.stream }));

const apiRouter = express.Router();

apiRouter.post("/token", verifyAuthController, (req, res) => {
  res.status(200).json({
    message: "Token valid"
  });
});

// user module should not be exposed publicly
// apiRouter.use("/users", userModule(express.Router()));
apiRouter.use("/auth", authModule(express.Router()));
apiRouter.use("/polls", pollModule(express.Router()));
apiRouter.use("/comments", commentModule(express.Router()));

app.use("/api/v1", apiRouter);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || error;

  if (process.env.NODE_ENV != "staging")
    logger.info(message);

  res.status(statusCode).json({ message, code: error.code || "INTERNAL_SERVER_ERROR" });
});

export default app;
