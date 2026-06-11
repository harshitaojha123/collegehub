const express = require("express");
const router = express.Router();

const {
  saveComparison,
  getComparisons,
} = require("../controllers/compareController");

router.get("/", getComparisons);
router.post("/", saveComparison);

module.exports = router;