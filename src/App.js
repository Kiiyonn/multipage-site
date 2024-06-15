import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Modal.css';
import LoginForm from './LoginForm';

// page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <div className="modal-backdrop">
        <div className="modal">
          <h1>Simple React SPA</h1>
          <BrowserRouter>
            {isLoggedIn && (
              <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button className="btn" onClick={handleLogout}>Logout</button>
              </nav>
            )}

            <Routes>
              {!isLoggedIn && (
                <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
              )}
              {isLoggedIn && (
                <>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/" element={<Navigate to="/home" />} />
                 
                </>
              )}
              <Route path="/*" element={<Navigate to="/" />} />
             
              </Routes>
              
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
