const express = require("express");
const app = express();
const morgan = require("morgan");
const volleyball = require("volleyball");
const path = require("path");

//logging middleware
app.use(morgan("dev"));
app.use(volleyball);

//Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// api request routes
app.use("/api", require("./api")); // include our routes!

// Send index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
