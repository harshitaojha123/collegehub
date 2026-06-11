const express = require("express");
const router = express.Router();

const {
  getSavedColleges,
  saveCollege,
  deleteSavedCollege,
} = require("../controllers/savedController");

router.get("/:userId", getSavedColleges);

router.post("/", saveCollege);

router.delete("/:id", deleteSavedCollege);

module.exports = router;