import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
// console.log(process.env.CORS_ORIGIN);

// this cookieparser and json is used to parse the data from requests like parse json data from body that we sent after using JSON.stringify and then the cookie data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import todoRouter from "./routes/todo.routes.js";

app.use("/api/v1/todos", todoRouter);

export { app };
