import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import { getColleges } from "../services/collegeService";
import axios from "axios";

function Compare() {
  const [colleges, setColleges] = useState([]);
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const data = await getColleges();
        setColleges(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchColleges();
  }, []);

  const selectedCollege1 = colleges.find(
    (college) => college.id === Number(college1)
  );

  const selectedCollege2 = colleges.find(
    (college) => college.id === Number(college2)
  );

  const saveComparison = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) {
        alert("Please login first");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/compare",
        {
          userId: user.id,
          college1Id: Number(college1),
          college2Id: Number(college2),
        }
      );

      alert("Comparison saved successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-extrabold">
            Compare Colleges
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Compare fees, placements, ratings and location
            side-by-side.
          </p>
        </div>

        {/* Select Colleges */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Select Colleges
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <select
              value={college1}
              onChange={(e) => setCollege1(e.target.value)}
              className="rounded-xl border border-white/10 bg-black p-4"
            >
              <option value="">
                Select College 1
              </option>

              {colleges.map((college) => (
                <option
                  key={college.id}
                  value={college.id}
                >
                  {college.name}
                </option>
              ))}
            </select>

            <select
              value={college2}
              onChange={(e) => setCollege2(e.target.value)}
              className="rounded-xl border border-white/10 bg-black p-4"
            >
              <option value="">
                Select College 2
              </option>

              {colleges.map((college) => (
                <option
                  key={college.id}
                  value={college.id}
                >
                  {college.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCollege1 && selectedCollege2 && (
            <button
              onClick={saveComparison}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Save Comparison
            </button>
          )}
        </div>

        {/* Comparison Table */}
        {selectedCollege1 && selectedCollege2 && (
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left">
                    Feature
                  </th>

                  <th className="p-4 text-left">
                    {selectedCollege1.name}
                  </th>

                  <th className="p-4 text-left">
                    {selectedCollege2.name}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold">
                    Location
                  </td>

                  <td className="p-4">
                    {selectedCollege1.location}
                  </td>

                  <td className="p-4">
                    {selectedCollege2.location}
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold">
                    Fees
                  </td>

                  <td className="p-4">
                    {selectedCollege1.fees}
                  </td>

                  <td className="p-4">
                    {selectedCollege2.fees}
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold">
                    Rating
                  </td>

                  <td className="p-4">
                    ⭐ {selectedCollege1.rating}
                  </td>

                  <td className="p-4">
                    ⭐ {selectedCollege2.rating}
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">
                    Placement
                  </td>

                  <td className="p-4">
                    {selectedCollege1.placement}
                  </td>

                  <td className="p-4">
                    {selectedCollege2.placement}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Recommendation */}
        {selectedCollege1 && selectedCollege2 && (
          <section className="mt-16 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10 text-center">
            <h2 className="text-4xl font-bold">
              Quick Recommendation
            </h2>

            <p className="mt-4 text-gray-300">
              Based on ratings and placement data
            </p>

            <h3 className="mt-6 text-5xl font-extrabold text-blue-400">
              {selectedCollege1.rating >
              selectedCollege2.rating
                ? selectedCollege1.name
                : selectedCollege2.name}
            </h3>
          </section>
        )}
      </div>
    </MainLayout>
  );
}

export default Compare;