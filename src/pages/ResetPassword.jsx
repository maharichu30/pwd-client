import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../utils/api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      await API.post(`/auth/reset-password/${token}`, { password });
      alert("Password updated successfully ✅");
      navigate("/");
    } catch {
      alert("Invalid or expired link ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 
        shadow-2xl rounded-3xl p-10 w-[350px] text-white">

        <h2 className="text-3xl font-bold text-center mb-4">
          Reset Password 🔐
        </h2>

        <p className="text-sm text-center mb-6 opacity-80">
          Enter your new password below
        </p>

        {/* Password Input */}
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleReset}
          className="w-full bg-white text-purple-600 font-semibold 
          p-3 rounded-lg hover:scale-105 transition"
        >
          Reset Password
        </button>

        {/* Back to login */}
        <p className="text-sm text-center mt-4">
          Go back to{" "}
          <Link to="/" className="underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}