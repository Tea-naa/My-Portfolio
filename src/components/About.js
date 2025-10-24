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
                        <p>If it's broken, I'll fix it. If it's manual, I'll automate it.</p>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="about-heading">About Me</h2>
                    <p className="about-paragraph">
                        Hi, I'm Tina—a problem solver who loves making systems work better. My path into tech 
                        wasn't traditional. I transitioned from hospitality management and completed an intensive 
                        software engineering bootcamp at UT Arlington. During that bootcamp, I discovered that my 
                        favorite part wasn't just writing code—it was figuring out how to deploy it, scale it, and 
                        keep it running reliably. That's when I realized I wanted to work across the entire stack, 
                        not just one piece of it.
                    </p>
                    <p className="about-paragraph">
                        My recent internship at Addteq gave me hands-on experience with the kind of work that excites 
                        me: converting their legacy WordPress site into high-availability infrastructure using Terraform 
                        and Ansible on DigitalOcean, automating disaster recovery workflows that cut restore time from 
                        hours to 15 minutes, and managing multi-region deployments. I also handled SSL certificate 
                        automation, load balancer configuration, and real production incidents—the kind of stuff that 
                        teaches you what "reliability" actually means at 3am.
                    </p>
                    <p className="about-paragraph">
                        I've also built web applications with JavaScript, React, Node.js, and MySQL, which gives me 
                        perspective on both sides of the equation. I understand what developers need when they're 
                        building features, and I know how to create infrastructure that supports them. I'm the person 
                        who sees a manual process and immediately thinks "how can I automate this?"—whether it's 
                        infrastructure provisioning, deployment pipelines, or SSL renewals.
                    </p>
                    <p className="about-paragraph">
                        I'm a certified Scrum Master® and thrive in collaborative environments where I can wear multiple 
                        hats. My hospitality background taught me that the best solutions come from understanding what 
                        people actually need (not just what they say they need), and my technical skills let me build 
                        those solutions. I'm always looking to learn new things, improve systems, and tackle interesting 
                        challenges—regardless of whether they fall under "development," "operations," or something in between.
                    </p>
                    
                    <div className="skills-container">
                        <p className="about-paragraph">
                            <strong>What I work with:</strong>
                        </p>
                        <ul className="skills-list">
                            <li><strong>Infrastructure as Code</strong>: Terraform, Ansible—building repeatable, version-controlled infrastructure</li>
                            <li><strong>Cloud & DevOps</strong>: AWS, DigitalOcean, Docker, CI/CD pipelines, load balancing, multi-region deployments</li>
                            <li><strong>Reliability & Operations</strong>: High-availability architecture, disaster recovery automation, system monitoring, incident response</li>
                            <li><strong>Full-Stack Development</strong>: JavaScript, React, Node.js, Express, MySQL—building scalable web applications</li>
                            <li><strong>Security & Best Practices</strong>: SSL/TLS management, secure authentication, infrastructure hardening</li>
                            <li><strong>Collaboration & Process</strong>: Certified Scrum Master®, Agile methodologies, cross-functional teamwork</li>
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