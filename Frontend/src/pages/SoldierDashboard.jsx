import React from "react";
//import SoldierSidebar from "../components/dashboard/SoldierSidebar";
//import Navbar from "../components/dashboard/NavBar";
import { FaBoxOpen, FaClipboardList, FaBell, FaFileAlt } from "react-icons/fa";
//import SummaryCard from "../components/dashboard/SummaryCard";

const SoldierDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SoldierSidebar />

      {/* Main Content */}
      <div className="ml-64 w-full">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Welcome, Soldier!</h1>
          <p className="mt-2 text-gray-600">Manage your inventory and reports efficiently.</p>

          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <SummaryCard icon={<FaBoxOpen />} text="Assigned Inventory" number={5} color="bg-teal-600" />
            <SummaryCard icon={<FaClipboardList />} text="Requests Pending" number={2} color="bg-yellow-500" />
            <SummaryCard icon={<FaBell />} text="Alerts" number={3} color="bg-red-500" />
          </div>

          {/* Leave & Incident Reporting */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leave Requests */}
            <div className="bg-white p-4 shadow-md">
              <h3 className="text-center text-xl font-bold">Leave Requests</h3>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded">Apply for Leave</button>
            </div>

            {/* Incident Reporting */}
            <div className="bg-white p-4 shadow-md">
              <h3 className="text-center text-xl font-bold">Incident Reporting</h3>
              <button className="w-full mt-4 bg-red-500 text-white py-2 rounded">Report an Incident</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldierDashboard;
