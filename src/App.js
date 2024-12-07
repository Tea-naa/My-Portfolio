import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home.js'; 
import Projects from './components/Projects.js';
import Navbar from './components/Navbar.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Badges from './components/Badges.js';
import Footer from './components/Footer.js';
import './components/slide.css'; // Import the new slide animation CSS

function AnimatedRoutes() {
  const location = useLocation(); // useLocation is called inside Router

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={300}>
        <div className="content"> {/* Wrapper for page content */}
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/badges" element={<Badges />} />
          </Routes>
          <Footer />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
