const Sequelize = require("sequelize");
const db = require("../database");

const Kit = db.define("kit", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: null
  }, 
  points:{
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate:{
          min: 0,
          max: 10
      }
  }
});

module.exports = Kit;