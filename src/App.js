import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux'; // Import your Redux store
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from './PublicRoute';
import Contact from './components/Contact';
//import Contact from './components/Contact';


function App() {
  return (
    <Provider store={store}> {/* Wrap the whole app with Provider */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<Register />} />x``
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />

            
            
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
