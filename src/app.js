import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

const app = express();

// security
app.use(helmet());
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(cookieParser());

// body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// logging & performance
app.use(morgan("dev"));
app.use(compression());

// rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// static files
app.use(express.static("public"));

export { app };
