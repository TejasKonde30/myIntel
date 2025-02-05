import React from 'react';

const AdminNavbar = () => {
  return (
    <nav className="bg-purple-600  p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Admin Pannel</a>
        </div>

        {/* Menu (for larger screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/ManageUsers" className="text-white hover:text-gray-200">ManageUsers</a>
          <a href="/UserSearch" className="text-white hover:text-gray-200">UserSearch</a>


        </div>

        {/* Hamburger Menu (for smaller screens) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
