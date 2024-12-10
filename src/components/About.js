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
                        <p>Full Stack Developer | Tech Enthusiast | Lifelong Learner</p>
                    </div>
                </div>
                <div className="about-content">
    <h2 className="about-heading">About Me</h2>
    <p className="about-paragraph">
        Hi, I'm Tina, a certified ScrumMaster® and passionate software engineer dedicated to creating impactful applications that solve complex problems. 
        My journey began with HTML and CSS, and I have since gained strong expertise in JavaScript, React, Node.js, and MySQL.
    </p>
    <p className="about-paragraph">
        I specialize in full-stack development and have hands-on experience in building efficient, user-friendly applications, 
        including projects like the Killer Knowledge App and the Animal Adoption Website. I thrive in Agile environments, 
        collaborating with cross-functional teams to deliver innovative solutions on time.
    </p>
    <p className="about-paragraph">
        My passion lies in continuous learning and problem-solving. Whether working on intuitive front-end interfaces or robust back-end systems, 
        I excel at designing scalable solutions that prioritize user experience and system performance.
    </p>
    <div className="skills-container">
        <p className="about-paragraph">
            I'm enthusiastic about advancing my skills and expertise in cutting-edge areas of the tech industry, including:
        </p>
        <ul className="skills-list">
            <li><strong>AI and Machine Learning</strong>: Utilizing AI-driven tools, such as GitHub Copilot, to enhance code efficiency and productivity.</li>
            <li><strong>Cloud Computing</strong>: Deploying scalable and secure applications using platforms like Azure DevOps and AWS.</li>
            <li><strong>DevOps Practices</strong>: Designing and implementing CI/CD pipelines for seamless integration, testing, and deployment.</li>
            <li><strong>Microservices Architecture</strong>: Building modular applications with independently scalable and deployable services.</li>
            <li><strong>Cybersecurity</strong>: Protecting sensitive data through secure coding practices, encryption, and proactive vulnerability management.</li>
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
