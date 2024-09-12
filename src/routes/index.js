const { Router } = require("express");
const SportController = require("../controller/sport.controller");
const TournamentController = require("../controller/tournament.controller");
const TeamsController = require("../controller/team.controller");
const SportTournamentController = require("../controller/sport_tournament.controller");
const TournamentTeamController = require("../controller/tournament_team.controller");

const router = Router();

//  <--Sports-->

router.get("/sports/all", SportController.getAll);
router.post("/sports/create", SportController.createSport);
router.patch("/sports/update", SportController.updateSport);
router.delete("/sports/delete/:id", SportController.deleteSport);

// <--Tournament-->

router.get("/tournament/all", TournamentController.getAll);
router.post("/tournament/create", TournamentController.createTournament);
router.patch("/tournament/update", TournamentController.updateTournament);
router.delete("/tournament/delete/:id", TournamentController.deleteTournament);

// <--Teams-->

router.get("/teams/all", TeamsController.getAll);
router.post("/teams/create", TeamsController.createTeams);
router.patch("/teams/update", TeamsController.updateTeams);
router.delete("/teams/delete/:id", TeamsController.deleteTeams);

// <--SportTournament-->
router.post("/sport-tournament/create", SportTournamentController.createSportTournament);


// <--TournamentTeam-->
router.post("/tournament-team/create", TournamentTeamController.createTournamentTeam);

module.exports = router;
