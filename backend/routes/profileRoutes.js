const express = require("express");
const router = express.Router();

const {
  getProfileStats,
} = require("../controllers/profileController");

router.get("/:userId", getProfileStats);

module.exports = router;