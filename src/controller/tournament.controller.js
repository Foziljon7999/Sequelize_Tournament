const SportsModel = require("../models/sports");
const TeamsModel = require("../models/team");
const TournamentModel = require("../models/tournament");

const getAll = async (req, res) => {
  try {
    let tournaments = await TournamentModel.findAll({
      include: {
        model: SportsModel,
        model: TeamsModel,
        attributes: ["id", "name"],
      },
    });

    res.status(200).send({
      success: true,
      data: tournaments,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const createTournament = async (req, res) => {
  let { name, year } = req.body;
  try {
    let tournaments = await TournamentModel.create({ name, year });
    res.status(200).send({
      success: true,
      message: "Created Tournament",
      data: tournaments,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const updateTournament = async (req, res) => {
  let { id, name, year } = req.body;
  try {
    let tournament = await TournamentModel.update(
      { name, year },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send({
      success: true,
      message: "Updated Tournament",
      data: tournament,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const deleteTournament = async (req, res) => {
  let { id } = req.params;
  try {
    let tournament = await TournamentModel.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      success: true,
      message: "Deleted Tournament",
      data: tournament,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  createTournament,
  updateTournament,
  deleteTournament,
};
