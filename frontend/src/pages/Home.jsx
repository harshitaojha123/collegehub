import MainLayout from "../layouts/MainLayout";
import CollegeCard from "../components/college/CollegeCard";
import { colleges } from "../assets/colleges";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Home() {
   const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(
      `/colleges?search=${encodeURIComponent(
        search
      )}`
    );
  };

  return (
    <MainLayout>
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-24 text-center">
<div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

<div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute  from-blue-500/10 via-transparent to-transparent" />

        <h1 className="max-w-5xl text-6xl font-extrabold leading-tight md:text-7xl">
          Find Your
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {" "}Dream College
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Search, compare and discover the best colleges based on
          placements, fees, rankings and student reviews.
        </p>

        <div className="mt-10 flex w-full max-w-3xl items-center rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
         <input
  type="text"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  onKeyDown={(e) =>
    e.key === "Enter" && handleSearch()
  }
  placeholder="Search IIT, NIT, Delhi, Mumbai..."
  className="w-full bg-transparent px-4 py-3 text-white outline-none"
/>

          <button
  onClick={handleSearch}
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
>
  Search
</button>
        </div>

      </section>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-3xl font-bold">500+</h3>
    <p className="text-gray-400">Colleges</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-3xl font-bold">50K+</h3>
    <p className="text-gray-400">Students</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-3xl font-bold">1000+</h3>
    <p className="text-gray-400">Courses</p>
  </div>
</div>
<section className="mx-auto max-w-7xl px-6 py-20">
  <h2 className="mb-10 text-4xl font-bold">
    Featured Colleges
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {colleges.map((college) => (
      <CollegeCard
        key={college.id}
        {...college}
      />
    ))}
  </div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="text-center">
    <h2 className="text-4xl font-bold">
      Why Choose CollegeHub?
    </h2>

    <p className="mt-4 text-gray-400">
      Everything you need to make the right college decision.
    </p>
  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-4xl">🔍</div>
      <h3 className="mt-4 text-xl font-semibold">
        Smart Search
      </h3>
      <p className="mt-3 text-gray-400">
        Find colleges using filters, rankings and location.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-4xl">⚖️</div>
      <h3 className="mt-4 text-xl font-semibold">
        Easy Comparison
      </h3>
      <p className="mt-3 text-gray-400">
        Compare colleges side by side instantly.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-4xl">📈</div>
      <h3 className="mt-4 text-xl font-semibold">
        Placement Insights
      </h3>
      <p className="mt-3 text-gray-400">
        Check salary packages and placement records.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-4xl">⭐</div>
      <h3 className="mt-4 text-xl font-semibold">
        Reviews & Ratings
      </h3>
      <p className="mt-3 text-gray-400">
        Explore student reviews before deciding.
      </p>
    </div>

  </div>
</section>


<section className="mx-auto max-w-7xl px-6 py-24">
  <h2 className="mb-12 text-center text-4xl font-bold">
    Student Reviews
  </h2>

  <div className="grid gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <p className="text-gray-300">
        "Helped me compare colleges easily and choose the right one."
      </p>
      <h4 className="mt-4 font-semibold">
        Rahul Sharma
      </h4>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <p className="text-gray-300">
        "Placement information was very useful."
      </p>
      <h4 className="mt-4 font-semibold">
        Priya Gupta
      </h4>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <p className="text-gray-300">
        "The comparison feature saved a lot of time."
      </p>
      <h4 className="mt-4 font-semibold">
        Aman Verma
      </h4>
    </div>

  </div>
</section>

<footer className="mt-20 border-t border-white/10 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              College
              <span className="text-blue-400">
                Hub
              </span>
            </h2>

            <p className="mt-4 text-gray-400">
              Discover, compare and choose the
              best colleges based on fees,
              placements, rankings and reviews.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/">Home</Link>
              <Link to="/colleges">Colleges</Link>
              <Link to="/compare">Compare</Link>
              <Link to="/saved">Saved</Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Features
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>College Search</p>
              <p>College Comparison</p>
              <p>Save Favorites</p>
              <p>Student Reviews</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📧 support@collegehub.com</p>
              <p>📍 India</p>
              <p>📱 +91 XXXXX XXXXX</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-gray-500">
            © {new Date().getFullYear()} CollegeHub.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

            <a href="#">
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
    </MainLayout>
  );
}

export default Home;





