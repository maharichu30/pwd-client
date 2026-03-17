import { useState } from "react";
import API from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 
        shadow-2xl rounded-3xl p-10 w-[350px] text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setData({ ...data, email: e.target.value })}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setData({ ...data, password: e.target.value })}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-white text-purple-600 font-semibold 
          p-3 rounded-lg hover:scale-105 transition"
        >
          Login
        </button>

        {/* Links */}
        <div className="text-sm mt-4 flex justify-between">
          <Link to="/forgot" className="hover:underline">
            Forgot Password?
          </Link>

          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </div>

      </div>

    </div>
  );
}