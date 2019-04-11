"use strict";
const User = require("../db/models/user.js");
const Kit = require("../db/models/kit");

const express = require("express");
const router = express.Router();

router.use(express.urlencoded());
// router.use(express.json);

router.get("/", async (req, res, next) => {
  try {
    let users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.log("Problem with getting users");
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const oneUser = await User.findById(req.params.id, {
      include: [{ model: Kit }]
    });

    res.json(oneUser);
  } catch (err) {
    console.log("Problem getting one user at user in API");
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let body = req.body;

    const newUser = await User.create(body);
    res.json(newUser);
  } catch (err) {
    console.log("Problem adding a user in the API");
    res.send(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await User.destroy({
      where: { id: req.params.id }
    });
    res.sendStatus(202);
  } catch (err) {
    console.log("Problem deleting a user in the API");
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let [num, user] = await User.update(
      req.body,
      {
        where: { id: req.params.id },
        returning: true,
        plain: true
      }
      // {
      //   include: [{ model: Students }]
      // }
    );

    res.send(user);
  } catch (err) {
    console.log("Problem editing user in the API");
    res.send(err);
  }
});

module.exports = router;
