import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { config } from "dotenv";
config({
  path: "./config/config.env",
});

// importing routes
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import ErrorMiddleware from "./middlewares/Error.js";
import payment from "./routes/paymentRoutes.js";

const app = express();

// using middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Testing api fine...");
});

// using routes
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/payment", payment);

export default app;

// CUSTOM ERROR HANDLER
app.use(ErrorMiddleware);

// Video-35 [timeStamp: 00:00]
