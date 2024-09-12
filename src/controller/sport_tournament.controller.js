const SportTournamentModel = require("../models/sport_tournament")

const createSportTournament = async (req, res) => {
    let { sportId, tournamentId } = req.body;
  
    try {
      let sportTournament = await SportTournamentModel.create({ sportId, tournamentId });
      res.status(200).send({
        success: true,
        message: "Created Sports",
        data: sportTournament,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  module.exports = {
    createSportTournament
  }