const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");

//logging middleware
app.use(morgan("dev"));

//static middleware
app.use(express.static(path.join(__dirname, "../public")));

//middleware for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mount routes to api route
app.use("/api", require("./api"));

//sends index.html for any other requests
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//error handlind middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
