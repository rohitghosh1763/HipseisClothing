import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../services/authService";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then((loggedInUser) => {
      setUser(loggedInUser);
    });
  }, []);

  if (user === null) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
