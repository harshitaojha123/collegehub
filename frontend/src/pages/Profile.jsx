import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
const API_URL = import.meta.env.VITE_API_URL;

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [stats, setStats] = useState({
    savedCount: 0,
    compareCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
       const res = await axios.get(
  `${API_URL}/api/profile/${user.id}`
);

        setStats(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchStats();
    }
  }, [user]);

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Profile Header */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="flex flex-col items-center gap-6 md:flex-row">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-5xl font-bold shadow-lg shadow-blue-500/20">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                {user?.name}
              </h1>

              <p className="mt-2 text-lg text-gray-400">
                {user?.email}
              </p>

              <p className="mt-3 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                ● Active Member
              </p>
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/40">
            <h2 className="text-5xl font-bold text-blue-400">
              {stats.savedCount}
            </h2>

            <p className="mt-2 text-gray-400">
              Saved Colleges
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-green-500/40">
            <h2 className="text-5xl font-bold text-green-400">
              {stats.compareCount}
            </h2>

            <p className="mt-2 text-gray-400">
              Comparisons Made
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-500/40">
            <h2 className="text-5xl font-bold text-yellow-400">
              {stats.savedCount + stats.compareCount}
            </h2>

            <p className="mt-2 text-gray-400">
              Total Activity
            </p>
          </div>

        </div>

        {/* Activity Section */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="mb-6 text-2xl font-bold">
            Activity Summary
          </h2>

          <div className="space-y-4 text-gray-300">

            <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
              <span>❤️ Colleges Saved</span>
              <span className="font-bold text-blue-400">
                {stats.savedCount}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
              <span>⚖️ Comparisons Performed</span>
              <span className="font-bold text-green-400">
                {stats.compareCount}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
              <span>📈 Overall Engagement</span>
              <span className="font-bold text-yellow-400">
                {stats.savedCount + stats.compareCount}
              </span>
            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Profile;