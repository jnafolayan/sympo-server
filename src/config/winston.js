import { resolve } from "path";
import winston from "winston";

const options = {
  file: {
    level: "info",
    filename: resolve(__dirname, "../../logs/app.log"),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5mb
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    handleExceptions: false,
    json: false,
    colorize: true
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: true
});

// create a stream object with a `write` method that will be
// used by morgan
logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
};

export default logger;
