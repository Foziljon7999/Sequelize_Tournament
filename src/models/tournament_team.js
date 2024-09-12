const TournamentModel = require("./tournament");
const TeamsModel = require("./team");
const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const TournamentTeamModel = sequelize.define("tournament_team", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tournamentId: {
    type: DataTypes.INTEGER,
    references: {
      model: TournamentModel,
      key: "id",
    },
  },
  teamId: {
    type: DataTypes.INTEGER,
    references: {
      model: TeamsModel,
      key: "id",
    },
  },
});

module.exports = TournamentTeamModel;
