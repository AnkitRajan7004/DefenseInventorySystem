import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RoleBasedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) 
    return <div>Loading...</div>; // Show loading while verifying user

  // Redirect to login if the user is not authenticated
  if (!user) 
    return <Navigate to="/login" replace />;

  // Redirect if the user doesn't have the required role
  if (!requiredRole.includes(user.role)) 
    return <Navigate to="/unauthorized" replace />;

  return children; // ✅ Render the allowed children
};

export default RoleBasedRoute;
