import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // New CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                </div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link>
                    <Link to="/projects" className="navbar-link" onClick={handleLinkClick}>Projects</Link>
                    <Link to="/skills" className="navbar-link" onClick={handleLinkClick}>Skills</Link>
                    <Link to="/about" className="navbar-link" onClick={handleLinkClick}>About Me</Link>
                    <Link to="/badges" className="navbar-link" onClick={handleLinkClick}>Certificates</Link>
                    <Link to="/contact" className="navbar-link" onClick={handleLinkClick}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
