import React, { useState } from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profile from '../profile.jpg'

const About = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div className="about-container">
            <div className="profile-section">
                <div className="profile-image-container">
                    <img 
                        src={profile}
                        alt="Tina Bajwa" 
                        className="profile-image" 
                    />
                    <div className="profile-hover">
                        <p>Site Reliability Engineer | DevOps | Full Stack Developer</p>
                    </div>
                </div>
                <div className="about-content">
    <h2 className="about-heading">About Me</h2>
    <p className="about-paragraph">
        Hi, I'm Tina, a Site Reliability Engineer and certified Scrum Master® passionate about building reliable, scalable 
        infrastructure and impactful applications. My journey began with full-stack development and evolved into infrastructure 
        automation after discovering my love for DevOps and SRE practices.
    </p>
    <p className="about-paragraph">
        I recently completed an SRE internship at Addteq where I converted their legacy WordPress site to high-availability 
        infrastructure using Terraform and Ansible on DigitalOcean. I automated disaster recovery workflows, managed SSL
        certificates, and deployed multi-region infrastructure—cutting environment restore time from hours to minutes.
    </p>
    <p className="about-paragraph">
        My background includes full-stack development with JavaScript, React, Node.js, and MySQL, giving me a unique perspective
        on both application development and infrastructure operations. I thrive in collaborative environments and excel at creating
        solutions that balance reliability, performance, and user experience.
    </p>
    <div className="skills-container">
        <p className="about-paragraph">
            My expertise spans across infrastructure, DevOps, and development:
        </p>
        <ul className="skills-list">
            <li><strong>Infrastructure as Code</strong>: Terraform, Ansible, and automated provisioning for consistent, repeatable deployments</li>
            <li><strong>Cloud & DevOps</strong>: AWS, DigitalOcean, CI/CD pipelines, Docker, and load balancer configuration</li>
            <li><strong>Site Reliability Engineering</strong>: High-availability architecture, disaster recovery automation, and system monitoring</li>
            <li><strong>Full-Stack Development</strong>: JavaScript, React, Node.js, Express, MySQL for building scalable web applications</li>
            <li><strong>Security & Best Practices</strong>: SSL/TLS management, secure authentication, and infrastructure security</li>
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
