"use strict";

const db = require("./database");

const Kit = require("./models/kit");
const User = require("./models/user");

Kit.belongsTo(User);
User.hasMany(Kit);

module.exports = {
  db,
  Kit,
  User
};
