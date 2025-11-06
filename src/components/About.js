import React, { useState } from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profile from '../profile.jpg';

const About = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="about-container">
      <div className="profile-section">
        <div className="profile-image-container">
          <img src={profile} alt="Tina Bajwa" className="profile-image" />
          <div className="profile-hover">
            <p>ex-bartender → self-taught coder → SRE at 3am</p>
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-heading">Hey, I'm Tina</h2>

          <p className="about-paragraph">
            I used to run an e-commerce business. Needed a website. No budget. So I taught myself to code on YouTube.  
            The moment my first site went live? I was hooked. That's when I realized I could build solutions to real problems with code.
          </p>

          <p className="about-paragraph">
            Fast forward: I graduated from UT Arlington's bootcamp, landed an SRE internship at Addteq, and cut disaster recovery from hours to 15 minutes with Terraform + Ansible.  
            I built HA WordPress across regions, automated SSL renewals, and fixed prod at 2am — solo.
          </p>

          <p className="about-paragraph">
            I'm still that same person. I help friends build websites for their small businesses. I'm teaching myself Kubernetes (Minikube, PVCs, probes) by deploying real apps.  
            I do this because I love solving problems — not because anyone's making me.
          </p>

          <p className="about-paragraph">
            I'm a certified Scrum Master® and thrive in collaborative environments where I can wear multiple hats. My hospitality background taught me that the best solutions come from understanding what people actually need (not just what they say they need), and my technical skills let me build those solutions. I'm always looking to learn new things, improve systems, and tackle interesting challenges—regardless of whether they fall under "development," "operations," or something in between.
          </p>

          <div className="skills-container">
            <p className="about-paragraph">What I work with:</p>
            <ul className="skills-list">
              <li>Infrastructure as Code: Terraform, Ansible, Bash Scripting, Configuration Management, Infrastructure Automation</li>
              <li>Cloud & Platforms: AWS, DigitalOcean, Docker, Kubernetes, Minikube, Load Balancer Configuration, Firewall Management (UFW)</li>
              <li>DevOps & Monitoring: CI/CD Pipelines, GitHub Actions, System Monitoring, Disaster Recovery, Apache, Linux Administration</li>
              <li>Programming & Databases: JavaScript, Node.js, React, Express.js, RESTful APIs, MySQL, MongoDB, Git/GitHub</li>
              <li>Methodologies: Agile/Scrum, Technical Documentation</li>
            </ul>
          </div>

          <a href="TinaBajwaResume.pdf" className="resume-link" download>
            Download My Resume
          </a>
        </div>
      </div>

      <div className="social-container">
        <a
          href="https://github.com/Tea-naa"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-button ${hoveredButton === 'github' ? 'hover' : ''}`}
          onMouseEnter={() => setHoveredButton('github')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tina-bajwa/"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-button ${hoveredButton === 'linkedin' ? 'hover' : ''}`}
          onMouseEnter={() => setHoveredButton('linkedin')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;