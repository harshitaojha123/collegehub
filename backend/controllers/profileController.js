const prisma = require("../config/prisma");

const getProfileStats = async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const savedCount =
      await prisma.savedCollege.count({
        where: { userId },
      });

    const compareCount =
      await prisma.compareHistory.count({
        where: { userId },
      });

    res.json({
      savedCount,
      compareCount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfileStats,
};