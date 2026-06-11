import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="flex min-h-[85vh] items-center justify-center px-6">

        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-gray-400">
              Login to access saved colleges and comparisons
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

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
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
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
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <div className="mt-6 text-center text-gray-400">

            Don't have an account?

            <Link
              to="/signup"
              className="ml-2 text-blue-400 hover:text-blue-300"
            >
              Sign Up
            </Link>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">

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

export default Login;