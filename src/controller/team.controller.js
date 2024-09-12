const TeamsModel = require("../models/team");
const TournamentModel = require("../models/tournament");

const getAll = async (req, res) => {
  try {
    let teams = await TeamsModel.findAll({
      include: {
        model: TournamentModel,
        attributes: ["id", "name"],
      },
    });
    res.status(200).send({
      success: true,
      data: teams,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const createTeams = async (req, res) => {
  let { name, year } = req.body;

  try {
    let teams = await TeamsModel.create({ name, year });
    res.status(200).send({
      success: true,
      message: "Created Team",
      data: teams,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const updateTeams = async (req, res) => {
  let { id, name, year } = req.body;
  try {
    let teams = await TeamsModel.update(
      { name, year },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send({
      success: true,
      message: "Created Team",
      data: teams,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const deleteTeams = async (req, res) => {
  let { id } = req.params;
  try {
    let teams = await TeamsModel.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      success: true,
      message: "Created Team",
      data: teams,
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
  createTeams,
  updateTeams,
  deleteTeams,
};
