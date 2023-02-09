const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

dotenv.config({ path: "config/config.env" });
const PORT = process.env.PORT || 3000;

connectDB();

const hospital = require("./router/hospitals.js");

app.use("/api/v1/hospitals", hospital);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello world",
  });
});

const server = app.listen(
  PORT,
  console.log(
    "server is runing in",
    process.env.NODE_ENV,
    "environment on port",
    PORT
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit());
});
