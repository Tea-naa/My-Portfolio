import React, { useState } from 'react';
import Hero from '../components/Hero.js'; 
import { Link } from 'react-router-dom';
import profile from '../profile.jpg';


const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <Hero />
                <img src={profile} alt="Tina" style={styles.profilePic} />
                <h1 className="animate__animated animate__fadeInDown" style={styles.heading}>
                    Welcome to My Portfolio!
                </h1>
                <p style={styles.paragraph}>
                Welcome! I am a passionate full-stack developer dedicated to crafting dynamic, user-friendly web applications. With expertise in JavaScript, React, Node.js, and Express, I thrive on building innovative solutions that seamlessly blend creativity with functionality. 
                </p>
                <p style={styles.paragraph}>
                Explore my portfolio to discover the projects that showcase my technical skills and commitment to delivering impactful digital experiences.
                </p>
                <Link to="/projects" style={{ ...styles.link, ...(isHovered ? styles.linkHover : {}) }} 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    View My Projects
                </Link>
                
            </div>
        
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full height
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
    profilePic: {
        width: '200px',
        borderRadius: '50%',
        marginBottom: '20px',
        border: '4px solid #444',
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
};

export default Home;
