const prisma = require("../config/prisma");

const getColleges = async (req, res) => {
  try {
    const colleges = await prisma.college.findMany();

    res.json(colleges);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCollegeById = async (req, res) => {
  try {
    const college = await prisma.college.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!college) {
      return res.status(404).json({
        message: "College not found",
      });
    }

    res.json(college);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getColleges,
  getCollegeById,
};