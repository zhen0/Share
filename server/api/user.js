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

// router.get("/:id", async (req, res, next) => {
//   try {
//     const oneUser = await User.findById(req.params.id, {
//       include: [{ model: Kit }]
//     });

//     res.json(oneUser);
//   } catch (err) {
//     console.log("Problem getting one user at user in API");
//     next(err);
//   }
// });

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

// router.put("/:id", async (req, res, next) => {
//   try {
//     let [num, user] = await User.update(
//       req.body,
//       {
//         where: { id: req.params.id },
//         returning: true,
//         plain: true
//       }
//       // {
//       //   include: [{ model: Students }]
//       // }
//     );

//     res.send(user);
//   } catch (err) {
//     console.log("Problem editing user in the API");
//     res.send(err);
//   }
// });

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log("No such user found:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else if (!user.correctPassword(req.body.password)) {
      console.log("Incorrect password for user:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      console.log("Problem setting up user in signup in uer api", err);
      next(err);
    }
  }
});

router.post("/logout", (req, res) => {
  console.log("hello there!!", req.session);
  req.logout();
  req.session.destroy();
  res.send("hello!");
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

// router.use("/google", require("./google"));

module.exports = router;
