import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveCollege } from "../../services/savedService";

function CollegeCard({
  id,
  name,
  location,
  fees,
  rating,
}) {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      await saveCollege({
        userId: user.id,
        collegeId: id,
      });

      setSaved(true);

      alert("College Saved ❤️");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Unable to save college"
      );
    }
  };

  const handleCompare = () => {
    navigate(`/compare?college=${id}`);
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">

      {/* College Banner */}
      <div className="mb-5 h-44 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-400/20 transition-all duration-300 group-hover:scale-[1.02]" />

      {/* College Name */}
      <h3 className="text-2xl font-bold text-white">
        {name}
      </h3>

      {/* Location */}
      <p className="mt-3 text-gray-400">
        📍 {location}
      </p>

      {/* Fees & Rating */}
      <div className="mt-5 flex items-center justify-between">

        <span className="text-lg font-bold text-blue-400">
          ₹{fees}
        </span>

        <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-400">
          ⭐ {rating}
        </span>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        <Link
          to={`/college/${id}`}
          className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold transition hover:bg-blue-500"
        >
          View
        </Link>

        <button
          onClick={handleSave}
          className={`rounded-xl px-4 py-3 font-semibold transition ${
            saved
              ? "bg-pink-600 text-white"
              : "border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white"
          }`}
        >
          {saved ? "❤️ Saved" : "🤍 Save"}
        </button>

        <button
          onClick={handleCompare}
          className="rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/10"
        >
          Compare
        </button>

      </div>

    </div>
  );
}

export default CollegeCard;