import React, { useState } from 'react';
import axios from 'axios';  

const Register = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      name,
      email,
      password,
      schoolName,
    });

    // Success message
    setMessage(response.data.message);

    // Reset the form fields after successful registration
    setName('');
    setEmail('');
    setPassword('');
    setSchoolName('');

  } catch (error) {
    // Error message
    setMessage(error.response?.data?.message || 'An error occurred');
  }
};


  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

      {message && <p className="text-center text-red-500 mb-4">{message}</p>}

      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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

        <div className="mb-4">
          <label className="block mb-2" htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            className="w-full p-2 border rounded"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
