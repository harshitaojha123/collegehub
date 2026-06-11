import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CollegeCard from "../components/college/CollegeCard";
import { getSavedColleges } from "../services/savedService";

function SavedColleges() {
  const [savedColleges, setSavedColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const user = JSON.parse(
          localStorage.getItem("user")
        );

        if (!user) {
          setLoading(false);
          return;
        }

        const res = await getSavedColleges(
          user.id
        );

        setSavedColleges(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaved();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">
            Loading...
          </h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-6 py-20">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-extrabold">
            ❤️ Saved Colleges
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Manage your shortlisted colleges and compare them later.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">
            <h2 className="text-5xl font-bold text-blue-400">
              {savedColleges.length}
            </h2>

            <p className="mt-3 text-lg text-gray-300">
              Saved Colleges
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
            <h2 className="text-5xl font-bold text-green-400">
              {
                JSON.parse(
                  localStorage.getItem(
                    "compareCount"
                  ) || "0"
                )
              }
            </h2>

            <p className="mt-3 text-lg text-gray-300">
              Comparisons Made
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8">
            <h2 className="text-5xl font-bold text-yellow-400">
              {savedColleges.length * 2}
            </h2>

            <p className="mt-3 text-lg text-gray-300">
              Opportunities Tracked
            </p>
          </div>

        </div>

        {/* Empty State */}
        {savedColleges.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center">

            <div className="text-8xl">
              🎓
            </div>

            <h2 className="mt-6 text-4xl font-bold">
              No Saved Colleges Yet
            </h2>

            <p className="mt-4 text-xl text-gray-400">
              Start exploring colleges and save your favorites.
            </p>

            <Link
              to="/colleges"
              className="mt-8 inline-block rounded-2xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
            >
              Explore Colleges
            </Link>

          </div>
        ) : (
          <>
            <h2 className="mb-8 text-3xl font-bold">
              Your Shortlisted Colleges
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {savedColleges.map((item) => (
                <CollegeCard
                  key={item.id}
                  {...item.college}
                />
              ))}

            </div>
          </>
        )}

      </section>
    </MainLayout>
  );
}

export default SavedColleges;