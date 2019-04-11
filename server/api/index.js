"use strict";

// npm const xyz = require("xyz");
const router = require("express").Router();

// NOTE: Any routes that you put here are ALREADY mounted on `/api`
//Example for '/api/xyz':
router.use("/users", require("./user"));
router.use("/kit", require("./kit"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
