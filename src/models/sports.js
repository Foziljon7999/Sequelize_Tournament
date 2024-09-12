const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const SportsModel = sequelize.define("sports", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = SportsModel;
