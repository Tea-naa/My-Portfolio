import React, { useState } from 'react';
import Hero from './Hero.js'; 
import { Link } from 'react-router-dom';
import profile from '../profile.jpg';
import './Home.css';  

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <Hero />
                {/* Profile Image Section */}
                <div className="profile-image-container">
                    <img 
                        src={profile} 
                        alt="Tina" 
                        className={`profile-image ${isHovered ? 'profile-image-hover' : ''}`} 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    />
                    <div className={`profile-hover ${isHovered ? 'profile-hover-visible' : ''}`}>
                    <p>Site Reliability Engineer | Full Stack Developer | Infrastructure Enthusiast</p>
                    </div>
                </div>

                <h1 className="animate__animated animate__fadeInDown" style={styles.heading}>
                    Welcome to My Portfolio!
                </h1>
                <p style={styles.paragraph}>
                Welcome! I'm a Site Reliability Engineer with experience in infrastructure automation and full-stack development. I specialize in building high-availability systems using Terraform and Ansible, while also creating user-friendly web applications with JavaScript, React, and Node.js.

                </p>
                <p style={styles.paragraph}>
                    Explore my portfolio to see infrastructure projects, DevOps automation, and full-stack applications that showcase my technical skills and commitment to building reliable, scalable systems.
                </p>

                <Link to="/projects" 
                    style={{ ...styles.link, ...(isHovered ? styles.linkHover : {}) }} 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    View My Projects
                </Link>
            </div>

            {/* Resume Download Button placed at the bottom and centered */}
            <div style={styles.resumeContainer}>
                <a 
                    href="/TinaBajwaResume.pdf" // Ensure the PDF is in the public folder
                    download="Tina_Bajwa_Resume.pdf"
                    style={styles.resumeLink}
                >
                    Download My Resume (PDF)
                </a>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full height
        justifyContent: 'space-between', // Pushes content to the top and bottom
    },
    container: {
        flex: '1', // Pushes footer to the bottom
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#1c1c1c',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    },
    heading: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#f0f0f0',
        marginBottom: '20px',
    },
    paragraph: {
        fontSize: '18px',
        color: '#d3d3d3',
        margin: '10px 0',
    },
    link: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#2c2c2c',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
    },
    linkHover: {
        transform: 'scale(1.1)',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
    },
    resumeContainer: {
        display: 'flex',
        justifyContent: 'center', // Centers the resume button horizontally
        alignItems: 'center', // Centers the button vertically
        marginTop: 'auto', // Pushes it to the bottom of the page
        marginBottom: '30px', // Adds space from the bottom
    },
    resumeLink: {
        display: 'inline-block',
        padding: '12px 30px',
        backgroundColor: '#f39c12',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
    },
    resumeLinkHover: {
        transform: 'scale(1.1)',
        boxShadow: '0 0 20px rgba(243, 156, 18, 0.8)',
    },
};

export default Home;
