"use strict";
const User = require("../db/models/user");
const Kit = require("../db/models/kit");
const express = require("express");
const router = express.Router();

router.use(express.urlencoded());

router.get("/", async (req, res, next) => {
  try {
    let kit = await Kit.findAll();
    res.json(kit);
  } catch (err) {
    console.log("Problem with getting Kit in kit API");
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const oneKit = await Kit.findById(req.params.id, {
      include: [{ model: User }]
    });
    res.json(oneKit);
  } catch (err) {
    console.log("Problem getting one piece of kit at kit in API", err);
  }
});

//This route lets me add a user id to kit
router.put("/:id", async (req, res, next) => {
  try {
    let [num, data] = await Kit.update(req.body, {
      where: { id: req.params.id },
      include: [{ model: User }],
      returning: true,
      plain: true
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let body = req.body;

    const newKit = await Kit.create(body);
    res.json(newKit);
  } catch (err) {
    console.log("Problem adding kit in the API");
    res.send(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Kit.destroy({
      where: { id: req.params.id }
    });
    res.sendStatus(202);
  } catch (err) {
    console.log("Problem deleting kit in the API");
    next(err);
  }
});
module.exports = router;
