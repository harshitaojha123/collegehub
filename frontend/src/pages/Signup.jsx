import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { signupUser } from "../services/authService";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await signupUser({
        name,
        email,
        password,
      });

      alert("Account Created Successfully");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Signup Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="relative flex min-h-[85vh] items-center justify-center px-6">

        <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">
              Create Account
            </h1>

            <p className="mt-2 text-gray-400">
              Join CollegeHub and discover your dream college
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 font-semibold transition hover:scale-[1.02]"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            Already have an account?

            <Link
              to="/login"
              className="ml-2 text-blue-400 hover:text-blue-300"
            >
              Login
            </Link>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <button
              type="button"
              className="w-full rounded-xl border border-white/10 p-4 hover:bg-white/5"
            >
              Continue with Google
            </button>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default Signup;