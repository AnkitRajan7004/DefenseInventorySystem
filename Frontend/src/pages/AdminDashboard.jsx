import React, { useEffect } from "react";
import AdminSidebar from "../components/dashboard/AdminSidebar";
import Navbar from "../components/dashboard/NavBar";
import AdminSummary from "../components/dashboard/AdminSummary";
import { useAuth } from "../context/authContext";
import { Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user && !loading) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="ml-64 w-full">
        <Navbar />

        {/* Dynamic Content Rendering */}
        <div className="p-6">
          <Outlet /> {/* Child Routes like /admin-dashboard/departments will render here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
