const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const TournamentModel = sequelize.define("tournament", {
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
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = TournamentModel;
