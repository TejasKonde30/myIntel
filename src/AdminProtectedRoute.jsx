import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDashboard from "./components/AdminDashboard";
import AdminNavbar from "./components/AdminNavbar";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated ,user,token,identity } = useSelector((state) => state.auth);

  
  return isAuthenticated && identity ? <><AdminNavbar/>{children}</> : <Navigate to="/Adminlogin" />;
};

export default ProtectedRoute;
