import winston from "winston";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create logger instance
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    // Store error logs
    new winston.transports.File({ filename: path.join(__dirname, "logs/error.log"), level: "error" }),

    // Store all logs (info, warnings, errors)
    new winston.transports.File({ filename: path.join(__dirname, "logs/combined.log") }),
  ],
});

// If in development, also log to console
if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}

export default logger;
