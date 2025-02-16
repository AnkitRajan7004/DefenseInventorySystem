import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,  
  FaBoxes,          
  FaUsers,          
  FaBuilding,       
  FaClipboardList,  
  FaCogs,          
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 bottom-0">
      {/* Sidebar Header */}
      <div className="bg-teal-600 h-14 flex items-center justify-center">
        <h3 className="text-xl font-bold">Defense Inventory</h3>
      </div>

      {/* Sidebar Links */}
      <div className="px-4 py-4 space-y-2">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-inventory"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FaBoxes />
          <span>Inventory</span>
        </NavLink>

        <NavLink
          to="/admin-soldiers"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers />
          <span>Soldiers</span>
        </NavLink>

        <NavLink
          to="admin-dashboard/departments" 
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FaBuilding /> {/* 🏢 Used FaBuilding for "Department" */}
          <span>Regiments</span>
        </NavLink>

        <NavLink
          to="/admin-requests"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FaClipboardList /> {/* 📋 Used FaClipboardList for "Requirements" */}
          <span>Requests</span>
        </NavLink>

        <NavLink
          to="/admin-settings"
          className={({ isActive }) =>
            `flex items-center space-x-4 px-4 py-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
