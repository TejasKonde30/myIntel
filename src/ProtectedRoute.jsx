import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated,user,token } = useSelector((state) => state.auth);

  
  return isAuthenticated  ? <><Navbar/>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
