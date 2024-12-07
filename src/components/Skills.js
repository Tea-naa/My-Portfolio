import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiPostman, SiExpress, SiVisualstudiocode, SiBootstrap,} from 'react-icons/si'; 
import { IoSettingsOutline } from "react-icons/io5";



const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const technicalSkills = [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MySQL', icon: <FaDatabase /> },
        { name: 'Express.js', icon: <SiExpress /> }, 
        { name: 'Git', icon: <FaGit /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'REST APIs', icon: <IoSettingsOutline /> }, 
        { name: 'Postman', icon: <SiPostman /> }, 
        { name: 'VS Code', icon: <SiVisualstudiocode /> }, 
        { name: 'Bootstrap', icon: <SiBootstrap /> }, 
        { name: 'Docker', icon: <FaDocker />},
        { name: 'Amazon Web Services',icon: <FaAws /> }
    ];

    const professionalSkills = [
        'Agile Methodologies (Scrum, Kanban)',
        'Software Development Lifecycle (SDLC)',
        'Problem-solving & Debugging',
        'API Development & Integration',
        'Testing & Automation (TDD)',
        'Full-Stack Development',
        'Version Control (Git)',
        'Database Design (SQL/NoSQL)',
        'Strong Communication Skills',
        'Technical Documentation',
    ];

    const bootcampSkills = [
        'Collaboration Tools (Jira, Trello)',
        'Code Review Practices',
        'Responsive Design',
        'Deployment Processes',
        'Testing Methodologies',
        'Frontend Frameworks',
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Technical Skills</h2>
            {/* Technical Skills */}
            <div style={styles.skills}>
                {technicalSkills.map((skill, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.skill,
                            ...(hoveredSkill === index ? styles.skillHover : {}),
                        }}
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        {skill.icon}
                        <span style={styles.skillName}>{skill.name}</span>
                    </div>
                ))}
            </div>
            {/* Professional Skills */}
            <h3 style={styles.subheading}>Professional Skills</h3>
            <div style={styles.qualitiesContainer}>
                {professionalSkills.map((skill, index) => (
                    <div key={index} style={styles.professionalSkill}>
                        {skill}
                    </div>
                ))}
            </div>
            {/* Education */}
            <h3 style={styles.subheading}>Education / Training</h3>
            <div style={styles.qualitiesContainer}>
                {bootcampSkills.map((skill, index) => (
                    <div key={index} style={styles.professionalSkill}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#1c1c1c',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
    },
    heading: {
        fontSize: '36px',
        color: '#f39c12',
        marginBottom: '30px',
    },
    skills: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    skill: {
        backgroundColor: '#2c2c2c',
        color: '#e0e0e0',
        borderRadius: '8px',
        padding: '10px 20px',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
    },
    skillHover: {
        transform: 'scale(1.1)',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
    },
    skillName: {
        marginLeft: '10px',
        fontSize: '18px',
    },
    subheading: {
        fontSize: '28px',
        marginTop: '30px',
        color: '#f39c12',
    },
    qualitiesContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        justifyContent: 'center',
    },
    professionalSkill: {
        backgroundColor: '#2c2c2c',
        padding: '10px',
        borderRadius: '5px',
        color: '#e0e0e0',
        textAlign: 'center',
        fontSize: '16px',
        boxShadow: '0 0 10px rgba(243, 156, 18, 0.5)',
        transition: 'transform',
    },
};

export default Skills;