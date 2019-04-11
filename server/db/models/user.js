const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 25
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

module.exports = User;
