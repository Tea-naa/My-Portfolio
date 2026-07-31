// Navbar.jsx - Navigation with Projects and About links

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Your name - links back to homepage */}
        <Link to="/" className="navbar-name">
          TINA BAJWA
        </Link>
        
        {/* Navigation links */}
        <div className="navbar-links">
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;