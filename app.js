import http from "http";
import express from "express";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { BadRequest } from "./errors/BadRequest.js";
import { sendEmail } from "./controller/sendEmails.js";
import dotenv from "dotenv";
dotenv.config();

const server = express();
const PORT = process.env.PORT || 8000;

const start = () => {
  try {
    // routes
    server.get("/", (req, res) => {
      res.send('<h1>Email Project Starter</h1><a href ="/send">send email</a>');
    });

    server.get("/send", sendEmail);

    // not found and error handler middleware
    server.use(notFound);
    server.use(errorHandlerMiddleware);

    // server connection
    http.createServer(server).listen(PORT, function () {
      console.info("Listening on port:", this.address());
    });
  } catch (error) {
    console.log(error);
  }
};

start();
