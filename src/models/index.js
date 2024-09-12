const SportsModel = require("./sports");
const TournamentModel = require("./tournament");
const TeamsModel = require("./team");
const SportTournamentModel = require("./sport_tournament");
const TournamentTeamModel = require("./tournament_team");

module.exports = {
  s: SportsModel.belongsToMany(TournamentModel, {
    through: SportTournamentModel,
    foreignKey: "sportId",
    otherKey: "tournamentId",
  }),

  t: TournamentModel.belongsToMany(SportsModel, {
    through: SportTournamentModel,
    foreignKey: "tournamentId",
    otherKey: "sportId",
  }),

  a: TournamentModel.belongsToMany(TeamsModel, {
    through: TournamentTeamModel,
    foreignKey: "tournamentId",
    otherKey: "teamId",
  }),

  c: TeamsModel.belongsToMany(TournamentModel, {
    through: TournamentTeamModel,
    foreignKey: "teamId",
    otherKey: "tournamentId",
  }),
};
