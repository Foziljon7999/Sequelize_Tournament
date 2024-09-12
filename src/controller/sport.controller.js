const SportsModel = require("../models/sports");
const TournamentModel = require("../models/tournament");

const getAll = async (req, res) => {
  try {
    let sports = await SportsModel.findAll({
      include: {
        model: TournamentModel,
        attributes: ["id", "name"],
      },
    });

    res.status(200).send({
      success: true,
      data: sports,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const createSport = async (req, res) => {
  let { name } = req.body;

  try {
    let sport = await SportsModel.create({ name });
    res.status(200).send({
      success: true,
      message: "Created Sports",
      data: sport,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const updateSport = async (req, res) => {
  let { id, name } = req.body;
  try {
    let sports = await SportsModel.update(
      { name },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send({
      success: true,
      message: "Updated Sports",
      data: sports,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const deleteSport = async (req, res) => {
  let { id } = req.params;
  try {
    let sports = await SportsModel.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      success: true,
      message: "Updated Sports",
      data: sports,
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
  createSport,
  updateSport,
  deleteSport,
};
