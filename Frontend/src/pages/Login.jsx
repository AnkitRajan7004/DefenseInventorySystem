import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./Login.css";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login} = useAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  
    const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
  
      if (response.data.success) {
        login(response.data.user)
       localStorage.setItem("token", response.data.token);
      if (response.data.user.role === "admin") {
        alert("Login successful!");
        navigate("/admin-dashboard");
      }
      else{
        alert("Login successful!");
        navigate("/soldier-dashboard");
      }
    }
    } catch (error) {
      if (error.response && error.response.data.success === false){
        setError(error.response.data.error)
      }else{
      console.error("Login failed:", error.response?.data || error);
      alert(error.response?.data?.message || "Login failed. Please check your credentials.");
      }  
  }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      <img
        src="/Letter.png"
        alt="Defense Logo"
        className="absolute top-5 left-5 w-20 h-20 rotating-logo"
      />

      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-96 bg-opacity-90">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-green-600"
              />
              <span>Remember Me</span>
            </label>
            <a href="#" className="hover:underline hover:text-gray-300">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
