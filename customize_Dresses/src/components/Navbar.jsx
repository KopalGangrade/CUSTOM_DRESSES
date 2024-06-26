import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Fusion
      </div>
      <div className="navbar-links">
        <div className="nav-item"><Link to="/">Home</Link></div>
        <div className="nav-item"><Link to="/design">Design</Link></div>
        <div className="nav-item"><Link to="/customization">Customization</Link></div>
        <div className="nav-item"><Link to="/product">ProductCatalogs</Link></div>
        <div className="nav-item"><Link to="/culture">CulturalDress</Link></div>
      </div>
      <div className="navbar-buttons">
        <button className="button login" onClick={handleLoginLogout}>
          {loggedIn ? 'Logout' : 'Login'}
        </button>
        {!loggedIn && (
          <button className="button signup">
            Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
