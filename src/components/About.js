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
                        Hi, I'm Tina, a passionate software engineer focused on creating impactful applications that solve complex problems. 
                        My journey began with HTML and CSS, but quickly evolved as I gained expertise in JavaScript, React, Node.js, and MySQL.
                    </p>
                    <p className="about-paragraph">
                        I specialize in full-stack development and have hands-on experience with building efficient, user-friendly applications, 
                        including projects like the Killer Knowledge App and Animal Adoption Website. I am also familiar with Agile methodologies 
                        and enjoy collaborating with teams to bring ideas to life.
                    </p>
                    <p className="about-paragraph">
                        What drives me is the constant learning and problem-solving involved in software engineering. Whether working on front-end 
                        interfaces or back-end systems, I enjoy crafting scalable solutions that deliver seamless user experiences.
                    </p>
                    <div className="skills-container">
                        <p className="about-paragraph">
                            I'm excited about the opportunities and challenges in the tech industry and am particularly eager to further develop my skills 
                            in areas such as:
                        </p>
                        <ul className="skills-list">
                            <li><strong>AI and Machine Learning</strong>: Leveraging data to build smarter applications.</li>
                            <li><strong>Cloud Computing</strong>: Using platforms like AWS or Azure to deploy scalable, secure applications.</li>
                            <li><strong>DevOps</strong>: Implementing continuous integration/continuous delivery pipelines to improve development workflows.</li>
                            <li><strong>Microservices Architecture</strong>: Developing modular, efficient applications with independent services that can scale and evolve independently.</li>
                            <li><strong>Cybersecurity</strong>: Ensuring the safety and privacy of applications and user data.</li>
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
