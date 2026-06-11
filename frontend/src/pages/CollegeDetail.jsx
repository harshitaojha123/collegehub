import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { getCollegeById } from "../services/collegeService";
import { saveCollege } from "../services/savedService";

function CollegeDetail() {
  const { id } = useParams();

  const [college, setCollege] = useState(null);

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const res = await getCollegeById(id);
        setCollege(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCollege();
  }, [id]);

  const handleSaveCollege = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) {
        alert("Please login first");
        return;
      }

      await saveCollege({
        userId: user.id,
        collegeId: college.id,
      });

      alert("College Saved ❤️");
    } catch (error) {
      console.log(error);
      alert("Unable to save college");
    }
  };

  if (!college) {
    return (
      <MainLayout>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-3xl font-bold">
            Loading...
          </h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      {/* Hero */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585"
          alt="college"
          className="h-[400px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-10">
          <h1 className="text-6xl font-bold">
            {college.name}
          </h1>

          <p className="mt-4 text-xl">
            ⭐ {college.rating} • 📍 {college.location}
          </p>
        </div>
      </section>

      {/* Buttons */}
      <div className="mx-auto flex max-w-7xl gap-4 px-6 py-8">

        <button
          onClick={handleSaveCollege}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
        >
          ❤️ Save College
        </button>

        <button className="rounded-xl border border-white/20 px-6 py-3 hover:bg-white/5">
          Compare
        </button>

        <button className="rounded-xl bg-green-600 px-6 py-3 hover:bg-green-500">
          Apply Now
        </button>

      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white/5 p-6">
            <h3 className="text-3xl font-bold">
              {college.fees}
            </h3>
            <p>Annual Fees</p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            <h3 className="text-3xl font-bold">
              {college.placement}
            </h3>
            <p>Average Package</p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            <h3 className="text-3xl font-bold">
              #2
            </h3>
            <p>NIRF Ranking</p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            <h3 className="text-3xl font-bold">
              1200+
            </h3>
            <p>Students Placed</p>
          </div>

        </div>
      </div>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="mb-6 text-4xl font-bold">
          Overview
        </h2>

        <p className="text-lg text-gray-300">
          {college.overview}
        </p>

      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-bold">
          Courses Offered
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white/5 p-6">
            B.Tech CSE
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            B.Tech ECE
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            MBA
          </div>

        </div>

      </section>

      {/* Placements */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-bold">
          Placement Highlights
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-green-500/10 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              ₹1.5 Cr
            </h3>

            <p>Highest Package</p>
          </div>

          <div className="rounded-2xl bg-blue-500/10 p-6">
            <h3 className="text-2xl font-bold text-blue-400">
              {college.placement}
            </h3>

            <p>Average Package</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            Google
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            Microsoft
          </div>

        </div>

      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-bold">
          Student Reviews
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white/5 p-6">
            Excellent placements and academics.
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            Great campus life and coding culture.
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            Amazing faculty support and internships.
          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default CollegeDetail;