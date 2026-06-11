import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CollegeCard from "../components/college/CollegeCard";
import { getColleges } from "../services/collegeService";

function Colleges() {
  const [searchParams] = useSearchParams();

  const initialSearch =
    searchParams.get("search") || "";

  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] =
    useState(initialSearch);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const data = await getColleges();
        setColleges(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter(
    (college) =>
      college.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      college.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Header */}
        <div className="mb-12 text-center">

          <h1 className="text-6xl font-extrabold">
            Explore Colleges
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Search and discover the best colleges across India.
          </p>

        </div>

        {/* Search Box */}
        <div className="mb-10">

          <input
            type="text"
            placeholder="🔍 Search IIT, NIT, Delhi, Mumbai..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-lg outline-none transition focus:border-blue-500"
          />

        </div>

        {/* Stats */}
        {!loading && (

          <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-4xl font-bold text-blue-400">
              {filteredColleges.length}
            </h3>

            <p className="mt-2 text-gray-400">
              Colleges Found
            </p>

          </div>

        )}

        {/* Loading */}
        {loading ? (

          <div className="flex justify-center py-20">
            <h2 className="text-3xl font-bold">
              Loading Colleges...
            </h2>
          </div>

        ) : filteredColleges.length === 0 ? (

          <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center">

            <h2 className="text-4xl font-bold">
              No Colleges Found
            </h2>

            <p className="mt-4 text-gray-400">
              Try searching with another name or location.
            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                {...college}
              />
            ))}

          </div>

        )}

      </div>
    </MainLayout>
  );
}

export default Colleges;