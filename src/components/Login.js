import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
//import { login } from '../redux'; // Import login action
import { loginSuccess } from "../redux";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      setMessage('Login successful');
      const userData = { email, token: response.data.authToken }; // Use email and token from the response
      console.log(response);
      // Dispatch login action to update Redux store
      document.cookie = `authToken=${userData.token}; path=/; max-age=604800; Secure`;

      dispatch(loginSuccess(userData));

      // Navigate to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

      {message && <p className="text-center text-red-500 mb-4">{message}</p>}

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
