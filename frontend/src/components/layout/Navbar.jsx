import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
    window.location.reload();
  };

  const navClass = (path) =>
    location.pathname === path
      ? "rounded-xl bg-blue-600/90 px-4 py-2 text-white font-semibold shadow-lg"
      : "rounded-xl px-4 py-2 text-gray-300 hover:bg-white/5 hover:text-white transition";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-black tracking-tight"
        >
          College
          <span className="text-blue-400">
            Hub
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          <Link to="/" className={navClass("/")}>
            Home
          </Link>

          <Link
            to="/compare"
            className={navClass("/compare")}
          >
            Compare
          </Link>

          <Link
            to="/saved"
            className={navClass("/saved")}
          >
            Saved
          </Link>

          <Link
            to="/colleges"
            className={navClass("/colleges")}
          >
            Colleges
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className={navClass("/login")}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="ml-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 font-semibold text-white hover:scale-105 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative ml-4">

              {/* Avatar */}
              <button
                onClick={() => setOpen(!open)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg"
              >
                {user.name?.charAt(0).toUpperCase()}
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-white/10 bg-zinc-900 p-2 shadow-2xl">

                  <div className="border-b border-white/10 p-3">
                    <p className="font-semibold text-white">
                      {user.name}
                    </p>

                    <p className="text-sm text-gray-400">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    to="/profile"
                    className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-white/5"
                  >
                    👤 My Profile
                  </Link>

                  <Link
                    to="/saved"
                    className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-white/5"
                  >
                    ❤️ Saved Colleges
                  </Link>

                  <Link
                    to="/compare"
                    className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-white/5"
                  >
                    ⚖️ Compare Colleges
                  </Link>

                  <button
                    onClick={logout}
                    className="mt-2 w-full rounded-xl border border-red-500 px-4 py-3 text-left text-red-400 hover:bg-red-500 hover:text-white transition"
                  >
                    🚪 Logout
                  </button>

                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;