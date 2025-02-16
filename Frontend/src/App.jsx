import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import SoldierDashboard from "./pages/soldierDashboard";
import PrivateRoute from "./utils/PrivateRoutes";
import RoleBasedRoute from "./utils/RoleBaseRoutes";
import DepartmentList from "./components/department/DepartmentList.jsx";
import AdminSummary from "./components/dashboard/AdminSummary.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin-dashboard" element={
          <PrivateRoute>
            <RoleBasedRoute requiredRole={["admin"]}>
              <AdminDashboard />
            </RoleBasedRoute>
          </PrivateRoute>
        }>
          {/* Default route for /admin-dashboard */}
          <Route index element={<AdminSummary />} />

          {/* Nested route for Departments */}
          <Route path="admin-dashboard/departments" element={<DepartmentList />} />
        </Route>

        <Route path="/soldier-dashboard" element={<SoldierDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
