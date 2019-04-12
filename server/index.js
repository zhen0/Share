const express = require("express");
const app = express();
const morgan = require("morgan");
const volleyball = require("volleyball");
const path = require("path");
const User = require("./db/models/user");
const passport = require("passport");
const session = require("express-session");

//session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "a wildly insecure secret",
    resave: false,
    saveUninitialized: false
  })
);

//passport

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.log("error in deserialize user in server index.js", err);
    done(err);
  }
});

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
