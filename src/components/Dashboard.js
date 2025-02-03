import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux'; 
import { logout } from "../redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch hook

  // Access authentication status from Redux state like email user token 
  const { isAuthenticated,user,token } = useSelector((state) => state.auth);

  // Handle logout
  const handleLogout = () => {
    // Remove the token from localStorage cookies
    dispatch(logout());
    localStorage.removeItem('token');

    // Redirect to the login page 
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 border rounded shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-center mb-4">Welcome to the Dashboard!</h2>
      <p className="text-center text-gray-700 mb-4">
        You are {isAuthenticated ? 'logged in' : 'not logged in'}.
      </p>

      {/* Display a logout button */}
      <div className="text-center">
        <button
          onClick={handleLogout}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
