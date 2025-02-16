import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create authentication Context
const userContext = createContext();

// AuthProvider Component
const authContext = ({ children }) => {  
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();  // ✅ Fix: Uncomment this

  // Check if user is authenticated on app load
  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/api/auth/verify", {
            headers:{ Authorization: `Bearer ${token}` },
          });

          if(response.data.success){
            setUser(response.data.user);
          } else {
            setUser(null);
            setLoading(false);
          }
        } catch (error) {
          console.error("Authentication error:", error);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setLoading(false);  // ✅ Fix: Moved inside `finally` block correctly
    };
    verifyUser();
  }, []);

  // Login Function
  const login = (userData) => {
    setUser(userData);  // ✅ Fix: Pass the user data properly
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");  
  };

  return (
    <userContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </userContext.Provider>
  );
};

// Custom Hook to Use Auth Context
export const useAuth = () => useContext(userContext);

export default authContext;  
