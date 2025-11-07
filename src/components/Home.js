import React, { useState } from 'react';
import Hero from './Hero.js'; 
import { Link } from 'react-router-dom';
import profile from '../profile.jpg';
import './Home.css';  

const Home = () => {
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const [isLinkHovered, setIsLinkHovered] = useState(false);

    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <Hero />
                {/* Profile Image Section */}
                <div 
                    className="profile-image-container"
                    onMouseEnter={() => setIsProfileHovered(true)} 
                    onMouseLeave={() => setIsProfileHovered(false)}
                >
                    <img 
                        src={profile} 
                        alt="Tina" 
                        className={`profile-image ${isProfileHovered ? 'profile-image-hover' : ''}`}
                    />
                    <div className={`profile-hover ${isProfileHovered ? 'profile-hover-visible' : ''}`}>
                        <p>DevOps Engineer | Full Stack Developer | Infrastructure Enthusiast</p>
                    </div>
                </div>

                <h1 className="animate__animated animate__fadeInDown" style={styles.heading}>
                    Welcome to my portfolio!
                    
                </h1>
                    <h3>I taught myself to code on YouTube because I couldn't afford to pay someone.</h3>
                <p style={styles.tagline}>
                    I automate infrastructure, reduce toil, and build systems that don't fail when it matters.
                </p>

                <div style={styles.highlightsContainer}>
                    <div style={styles.highlight}>
                        <strong style={styles.metric}>Hours → Minutes</strong>
                        <p style={styles.metric_text}>Disaster recovery automation with Terraform + Ansible at Addteq</p>
                    </div>
                    <div style={styles.highlight}>
                        <strong style={styles.metric}>Full Stack</strong>
                        <p style={styles.metric_text}>React, Node.js, MongoDB, Express — shipping production-ready apps</p>
                    </div>
                    <div style={styles.highlight}>
                        <strong style={styles.metric}>Container Orchestration</strong>
                        <p style={styles.metric_text}>Kubernetes, Docker, CI/CD pipelines, monitoring & alerting</p>
                    </div>
                </div>

                <p style={styles.paragraph}>
                    I solve real problems: reducing manual ops work through Infrastructure as Code, ensuring reliability through monitoring and incident response, and building full-stack solutions that scale. 
                </p>

                <p style={styles.paragraph}>
                    See how I deployed a full MERN application to Kubernetes with self-healing infrastructure → <strong>TipTrack in Projects</strong>
                </p>

                <Link to="/projects" 
                    style={{ ...styles.link, ...(isLinkHovered ? styles.linkHover : {}) }} 
                    onMouseEnter={() => setIsLinkHovered(true)} 
                    onMouseLeave={() => setIsLinkHovered(false)}
                >
                    View My Work
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
        minHeight: '100vh',
        justifyContent: 'space-between',
    },
    container: {
        flex: '1',
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
    tagline: {
        fontSize: '22px',
        color: '#00d4ff',
        marginBottom: '40px',
        fontWeight: '500',
    },
    highlightsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px',
        padding: '20px 0',
    },
    highlight: {
        padding: '20px',
        backgroundColor: '#2c2c2c',
        borderRadius: '8px',
        borderLeft: '4px solid #00d4ff',
        transition: 'transform 0.3s, box-shadow 0.3s',
    },
    metric: {
        fontSize: '24px',
        color: '#00d4ff',
        display: 'block',
    },
    metric_text: {
        fontSize: '14px',
        color: '#d3d3d3',
        marginTop: '8px',
    },
    paragraph: {
        fontSize: '18px',
        color: '#d3d3d3',
        margin: '15px 0',
        lineHeight: '1.6',
    },
    link: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '12px 30px',
        backgroundColor: '#00d4ff',
        color: '#1c1c1c',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'transform 0.3s, box-shadow 0.3s',
        fontWeight: 'bold',
        boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
    },
    linkHover: {
        transform: 'scale(1.1)',
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
    },
    resumeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: '30px',
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
        boxShadow: '0 0 10px rgba(243, 156, 18, 0.5)',
    },
    resumeLinkHover: {
        transform: 'scale(1.1)',
        boxShadow: '0 0 20px rgba(243, 156, 18, 0.8)',
    },
};

export default Home;