import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'; 
import { logout } from "../redux";
import { useNavigate } from 'react-router-dom';



//email and name are passed so using email and name
const UserSearch = () => { 
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const navigate = useNavigate();

  

  const handleSearch = async () => {
    try {
      setError("");
      setUsers([]);

      // Construct query parameters
      const query = new URLSearchParams();
      if (email) query.append("email", email);
      if (name) query.append("name", name);
//call the backend server.js code 
      const response = await axios.get(`http://localhost:5000/api/user/profile?${query.toString()}`);
      setUsers(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
const handleLogout = () => {
    // Remove the token from localStorage cookies
    dispatch(logout());
    localStorage.removeItem('token');

    // Redirect to the login page 
    navigate("/login");
  };
  

  return (
    <><div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg absolute top-20">
      <h2 className="text-xl font-bold mb-4">Search Users</h2>

      {/* Email Input */}
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded" />
      <p>or</p>
      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded" />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Display Results */}
      {users.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Results:</h3>
          <ul className="list-disc pl-5">
            {users.map((user) => (
              <li key={user._id}>
                <strong>{user.name}</strong> - {user.email} -{user.schoolName}{/*can get any user data*/}
              </li>
            ))}
          </ul>
        </div>

      )}
    </div>
    <div className="text-center ">
        <button
          onClick={handleLogout}
          className="absolute bottom-4 right-4 px-4 py-2 bg-[#4C0070] text-white rounded-md hover:bg-[#3a0053] transition"
        >
          Logout
        </button>
      </div></>
    
  );
};

export default UserSearch;
