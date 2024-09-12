const SportsModel = require("./sports");
const TournamentModel = require("./tournament");
const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const SportTournamentModel = sequelize.define("sport_tournament", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  sportId: {
    type: DataTypes.INTEGER,
    references: {
      model: SportsModel,
      key: "id",
    },
  },
  tournamentId: {
    type: DataTypes.INTEGER,
    references: {
      model: TournamentModel,
      key: "id",
    },
  },
});

module.exports = SportTournamentModel;
