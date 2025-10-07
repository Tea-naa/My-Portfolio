import React, { useEffect, useState } from 'react';
import './Hero.css';

const roles = ['Site Reliability Engineer', 'DevOps Engineer', 'Infrastructure Automator', 'Problem Solver'];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[index];
            const updatedText = isDeleting
                ? currentRole.substring(0, text.length - 1)
                : currentRole.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 100 : 150); // Adjusted typing speed

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    // Conditional article for "innovator"
    const article = roles[index] === 'innovator' ? 'an' : 'a';

    return (
        <div className="hero-container">
            <h1 className="hero-title light-grey">Hi, I'm Tina</h1>
            <h2 className="hero-subtitle">
                I'm <span className="highlight glow">{article} {text}</span>.
            </h2>
        </div>
    );
};

export default Hero;
