const TournamentTeamModel = require("../models/tournament_team");

const createTournamentTeam = async (req, res) => {
  let { tournamentId, teamId } = req.body;

  try {
    let tournamentTeam = await TournamentTeamModel.create({
      teamId,
      tournamentId,
    });
    res.status(200).send({
      success: true,
      message: "Created Sports",
      data: tournamentTeam,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTournamentTeam,
};
