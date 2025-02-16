import React from "react";
import { FaUsers, FaBoxes, FaBuilding, FaCheck, FaClock, FaTimes, FaFileAlt } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const SummaryCard = ({ icon, text, number, color }) => (
  <div className="flex items-center bg-white shadow-md p-4 rounded-lg w-full">
    <div className={`text-3xl flex justify-center items-center ${color} text-white px-5 py-3 rounded-full`}>
      {icon}
    </div>
    <div className="pl-4">
      <p className="text-lg font-semibold">{text}</p>
      <p className="text-2xl font-bold">{number}</p>
    </div>
  </div>
);

const AdminSummary = () => {
  const inventoryData = [
    { name: "Weapons", value: 400 },
    { name: "Medical Supplies", value: 300 },
    { name: "Gear", value: 200 },
    { name: "Ammunition", value: 100 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const departmentRequestData = [
    { department: "Infantry", applied: 50, approved: 40, pending: 5, rejected: 5 },
    { department: "Medical", applied: 30, approved: 25, pending: 3, rejected: 2 },
    { department: "Logistics", applied: 40, approved: 35, pending: 3, rejected: 2 },
    { department: "Engineering", applied: 25, approved: 20, pending: 4, rejected: 1 },
  ];

  return (
    
    <div className="p-6 space-y-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard icon={<FaBoxes />} text="Total Inventory" number={1000} color="bg-teal-600" />
        <SummaryCard icon={<FaUsers />} text="Total Soldiers" number={350} color="bg-yellow-500" />
        <SummaryCard icon={<FaBuilding />} text="Total Regiments" number={5} color="bg-purple-500" />
      </div>

      {/* Increased space before Request Details Section */}
      <h3 className="text-2xl font-bold text-center mt-12">Request Details</h3>

      {/* Middle Section: Requests Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <SummaryCard icon={<FaFileAlt />} text="Requests Applied" number={120} color="bg-blue-500" />
        <SummaryCard icon={<FaCheck />} text="Requests Approved" number={85} color="bg-green-500" />
        <SummaryCard icon={<FaClock />} text="Pending Requests" number={25} color="bg-orange-500" />
        <SummaryCard icon={<FaTimes />} text="Requests Rejected" number={10} color="bg-red-500" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-center text-xl font-bold mb-4">Inventory Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={inventoryData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Department Requests */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-center text-xl font-bold mb-4">Department Request Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentRequestData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applied" fill="#0088FE" name="Applied" />
              <Bar dataKey="approved" fill="#00C49F" name="Approved" />
              <Bar dataKey="pending" fill="#FFBB28" name="Pending" />
              <Bar dataKey="rejected" fill="#FF8042" name="Rejected" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
