import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© {new Date().getFullYear()} Tina Bajwa</p>
            <div style={styles.socials}>
                <a href="https://github.com/Tea-naa" style={styles.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/tina-bajwa/" style={styles.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#1a1a1a',
        color: '#e0e0e0',
        borderTop: '1px solid #4a4a4a',
        marginTop: 'auto', // Push footer to the bottom when content is less than the viewport height
        width: '100%',
    },
    
    text: {
        margin: '10px 0',
        fontSize: '14px',
    },
    socials: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '10px',
    },
    link: {
        color: '#f39c12',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s',
    },
};

export default Footer;
