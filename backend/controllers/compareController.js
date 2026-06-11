const prisma = require("../config/prisma");

const saveComparison = async (req, res) => {
  try {
    const {
      userId,
      college1Id,
      college2Id,
    } = req.body;

    const comparison =
      await prisma.compareHistory.create({
        data: {
          userId,
          college1Id,
          college2Id,
        },
      });

    res.status(201).json(comparison);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getComparisons = async (req, res) => {
  try {
    const comparisons =
      await prisma.compareHistory.findMany();

    res.json(comparisons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveComparison,
  getComparisons,
};