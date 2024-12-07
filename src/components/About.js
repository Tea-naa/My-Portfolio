import React, { useState } from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div className="about-container">
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
            <h2 className="about-heading">About Me</h2>
            <p className="about-paragraph">
                Hi, I'm Tina, a software engineer with a passion for solving complex problems through coding. 
                My journey in software development began with HTML and CSS, and I've since built a strong foundation in JavaScript, 
                React, Node.js, and MySQL.
            </p>
            <p className="about-paragraph">
                I have experience in full-stack development, Agile methodologies, and thrive in collaborative environments. 
                My adaptability, attention to detail, and creative problem-solving skills drive me to develop impactful applications 
                that enhance user experiences.
            </p>
            <p className="about-paragraph">
                As I continue to grow in my career, I'm excited about the challenges and opportunities in the tech industry. 
                Whether it's working on front-end interfaces or back-end architectures, I enjoy creating efficient, 
                scalable solutions.
            </p>
            <a href="path/to/your/resume.pdf" className="resume-link" download>
                Download My Resume
            </a>
        </div>
    );
};

export default About;
