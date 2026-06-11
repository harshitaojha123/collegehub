import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import CollegeDetail from "./pages/CollegeDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SavedColleges from "./pages/SavedColleges";
import Colleges from "./pages/Colleges";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/college/:id" element={<CollegeDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/saved" element={<SavedColleges />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

