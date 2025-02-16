import React from "react";
import { FaBuilding, FaCheck, FaClock, FaTimes } from "react-icons/fa";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const SummaryCard = ({ icon, text, number, color }) => (
  <div className="flex items-center bg-white shadow-md p-4 rounded-lg w-full">
    <div className={`text-3xl flex justify-center items-center ${color} text-white px-5 py-3 rounded-full`}>
      {icon}
    </div>
    <div className="pl-4">
      <p className="text-lg font-semibold text-gray-700">{text}</p>
      <p className="text-2xl font-bold text-gray-900">{number}</p>
    </div>
  </div>
);

const DepartmentList = () => {
  const departmentData = [
    { department: "Infantry", applied: 50, approved: 40, pending: 5, rejected: 5 },
    { department: "Medical", applied: 30, approved: 25, pending: 3, rejected: 2 },
    { department: "Logistics", applied: 40, approved: 35, pending: 3, rejected: 2 },
    { department: "Engineering", applied: 25, approved: 20, pending: 4, rejected: 1 },
  ];

  return (
    <div className="relative min-h-screen bg-cover bg-center p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Department List Overview</h2>

      {/* Top Section: Summary of Requests */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <SummaryCard icon={<FaBuilding />} text="Total Departments" number={4} color="bg-purple-500" />
        <SummaryCard icon={<FaCheck />} text="Total Approved" number={120} color="bg-green-500" />
        <SummaryCard icon={<FaClock />} text="Pending Requests" number={15} color="bg-orange-500" />
        <SummaryCard icon={<FaTimes />} text="Rejected Requests" number={10} color="bg-red-500" />
      </div>

      {/* Department Requests Chart */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-center text-xl font-bold text-gray-700 mb-4">Department Request Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            {["applied", "approved", "pending", "rejected"].map((key, index) => (
              <Bar key={`bar-${key}-${index}`} dataKey={key} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index]} name={key.charAt(0).toUpperCase() + key.slice(1)} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DepartmentList;
