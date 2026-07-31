// App.js - Main application with routing
// This sets up navigation between Home, Projects, and About pages

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spotlight from './components/Spotlight';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    // Router wraps everything - enables navigation
    <Router>
      <div className="App">
        {/* Cursor-reactive glow, the site's one signature interaction */}
        <Spotlight />

        {/* Small gold dot that replaces the cursor on desktop */}
        <CustomCursor />

        {/* Navbar appears on every page */}
        <Navbar />

        {/* Routes define which component shows for each URL */}
        <Routes>
          {/* Homepage - shows at "/" */}
          <Route path="/" element={<Home />} />

          {/* Projects page - shows at "/projects" */}
          <Route path="/projects" element={<Projects />} />

          {/* About page - shows at "/about" */}
          <Route path="/about" element={<About />} />

          {/* Contact page - shows at "/contact" */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;