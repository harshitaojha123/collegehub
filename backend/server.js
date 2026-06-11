require("dotenv").config();

const express = require("express");
const cors = require("cors");

const collegeRoutes = require("./routes/collegeRoutes");
const savedRoutes = require("./routes/savedRoutes");
const authRoutes = require("./routes/authRoutes");
const compareRoutes =
  require("./routes/compareRoutes");
  const profileRoutes =
  require("./routes/profileRoutes");

const app = express();

app.use(cors({
  origin: [
   "https://collegehub-sko3.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CollegeHub API Running");
});

app.use("/api/colleges", collegeRoutes);
app.use("/api/saved", savedRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/compare", compareRoutes);
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});