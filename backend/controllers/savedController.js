const prisma = require("../config/prisma");

const getSavedColleges = async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const saved = await prisma.savedCollege.findMany({
      where: {
        userId,
      },
      include: {
        college: true,
      },
    });

    res.json(saved);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const saveCollege = async (req, res) => {
  try {
    const { userId, collegeId } = req.body;

    const saved = await prisma.savedCollege.create({
      data: {
        userId: Number(userId),
        collegeId: Number(collegeId),
      },
    });

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteSavedCollege = async (req, res) => {
  try {
    const savedId = Number(req.params.id);

    await prisma.savedCollege.delete({
      where: {
        id: savedId,
      },
    });

    res.json({
      message: "College removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getSavedColleges,
  saveCollege,
  deleteSavedCollege,
};