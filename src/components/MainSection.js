import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const MainSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="relative w-80 h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Login Form */}
          <div
            className={`absolute w-full h-full bg-white flex items-center justify-center rounded-lg shadow-md transition-all duration-500 ${
              isLogin ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
          >
            <Login />
          </div>

          {/* Register Form */}
          <div
            className={`absolute w-full h-full bg-white flex items-center justify-center rounded-lg shadow-md transition-all duration-500 ${
              isLogin ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
            }`}
          >
            <Register />
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleForm}
        className="mt-5 px-5 py-2 bg-[#4C0070] text-white rounded-md hover:bg-[#3a0053] transition"
      >
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </div>
  );
};

export default MainSection;
