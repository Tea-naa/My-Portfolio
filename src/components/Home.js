import React, { useState } from 'react';
import Hero from './Hero.js';
import { Link } from 'react-router-dom';
import profile from '../profile.jpg';
import './Home.css';

const Home = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);

  return (
    <div className="home-page">
      <div className="home-container">
        <Hero />

        {/* Profile Image */}
        <div className="profile-image-container">
          <img
            src={profile}
            alt="Tina Bajwa"
            className={`profile-image ${isImageHovered ? 'profile-image-hover' : ''}`}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          />
          <div className={`profile-hover ${isImageHovered ? 'profile-hover-visible' : ''}`}>
            <p>DevOps Engineer | Full Stack Developer | Infrastructure Enthusiast</p>
          </div>
        </div>

        <h1 className="home-heading">Hi! Welcome to my portfolio!</h1>

        <p className="home-tagline">
          I automate infrastructure, reduce toil, and build systems that don't fail when it matters.
          <br />
          Former bartender → Amazon FBA CEO → self-taught coder → DevOps Engineer who ships real infrastructure that saves hours weekly.
        </p>

        {/* Highlight Cards */}
        <div className="highlights-grid">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`highlight-card ${hoveredHighlight === index ? 'highlight-hover' : ''}`}
              onMouseEnter={() => setHoveredHighlight(index)}
              onMouseLeave={() => setHoveredHighlight(null)}
            >
              {index === 0 && (
                <>
                  <strong className="metric">Hours → Minutes</strong>
                  <p className="metric-text">One command disaster recovery automation with Terraform + Ansible at Addteq</p>
                </>
              )}
              {index === 1 && (
                <>
                  <strong className="metric">Full Stack</strong>
                  <p className="metric-text">React, Node.js, MongoDB, Express — shipping production-ready apps</p>
                </>
              )}
              {index === 2 && (
                <>
                  <strong className="metric">Container Orchestration</strong>
                  <p className="metric-text">Kubernetes, Docker, CI/CD pipelines, monitoring & alerting</p>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="home-paragraph">
        I don't just learn tools — I use them to fix real problems. 
        Cut manual ops by 90%. Automated SSL for zero outages with acme.sh + DNS-01. 
        Built monitoring that catches issues before they escalate. 
        From bartending to shipping production infrastructure — I get things done. 

        Quick learner with non-traditional background bringing unique perspective to infrastructure challenges.
</p>

        <p className="home-paragraph">
          See how I deployed a full MERN application to Kubernetes with self-healing infrastructure → <strong>TipTrack in Projects</strong>
        </p>

        <Link to="/projects" className="home-cta">
          View My Work
        </Link>
      </div>

      <div className="resume-wrapper">
        <a
          href="/Tina%20Bajwa%20-%20Resume.pdf"
          download="Tina_Bajwa_Resume.pdf"
          className="resume-button"
        >
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default Home;