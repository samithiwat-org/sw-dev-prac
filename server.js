const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "config/config.env" });
const PORT = process.env.PORT || 3000;

const hospital = require("./router/hospitals.js");

app.use("/api/v1/hospitals", hospital);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello world",
  });
});

app.listen(
  PORT,
  console.log(
    "server is runing in",
    process.env.NODE_ENV,
    "environment on port",
    PORT
  )
);
