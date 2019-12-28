import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import morgan from "morgan";
import logger from "./config/winston";
import userModule from "./modules/user";

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
apiRouter.use("/users", userModule(express.Router()));

app.use("/api/v1", apiRouter);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || error;

  if (process.env.NODE_ENV != "staging")
    logger.info(message);

  res.status(statusCode).json({ message, code: error.code || "INTERNAL_SERVER_ERROR" });
});

export default app;
