import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center h-14 bg-teal-600 px-6 shadow-md text-white">
      <h1 className="text-xl font-bold">
        Welcome, {user?.name ?? "Major"}
      </h1>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition text-sm"
        aria-label="Logout"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Navbar;
