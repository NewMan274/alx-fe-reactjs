import { Navigate } from "react-router-dom";

// Fake authentication function
const isAuthenticated = () => {
  return true; // change to true to simulate login
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
