import React, { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, 
  FaDocker, FaAws, FaLinux, FaCloud, FaGithub 
} from 'react-icons/fa';
import { 
  SiPostman, SiExpress, SiVisualstudiocode, SiBootstrap, 
  SiTerraform, SiAnsible, SiDigitalocean, SiConfluence,
  SiKubernetes, SiMongodb, SiJira
} from 'react-icons/si';
import { IoSettingsOutline } from "react-icons/io5";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Core Development Stack
  const devSkills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'MongoDB Atlas', icon: <SiMongodb /> },
    { name: 'REST APIs', icon: <IoSettingsOutline /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'VS Code', icon: <SiVisualstudiocode /> },
    { name: 'Git/GitHub', icon: <FaGithub /> },
  ];

  // DevOps / SRE & Cloud Tools
  const devopsSkills = [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'DigitalOcean', icon: <SiDigitalocean /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'Minikube', icon: <SiKubernetes /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Ansible', icon: <SiAnsible /> },
    { name: 'Load Balancer', icon: <FaCloud /> },
    { name: 'Firewall (UFW)', icon: <FaLinux /> },
    { name: 'Confluence', icon: <SiConfluence /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Bash / Linux', icon: <FaLinux /> },
  ];

  // Professional / Workflow Skills (from resume)
  const workflowSkills = [
    'Infrastructure as Code (IaC)',
    'High-Availability Architecture',
    'CI/CD Pipeline Automation',
    'Disaster Recovery & Backups',
    'Monitoring & Alerts (DigitalOcean)',
    'Agile Development (Scrum)',
    'System Troubleshooting & Root Cause Analysis',
    'Technical Documentation & Runbooks',
    'Collaboration Tools (Jira, Trello)',
    'Version Control & Code Review Practices',
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Technical Skills</h2>

      {/* Full-Stack Development */}
      <h3 style={styles.subheading}>Full-Stack Development</h3>
      <div style={styles.skills}>
        {devSkills.map((skill, index) => (
          <div
            key={index}
            style={{
              ...styles.skill,
              ...(hoveredSkill === `dev-${index}` ? styles.skillHover : {}),
            }}
            onMouseEnter={() => setHoveredSkill(`dev-${index}`)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {skill.icon}
            <span style={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* DevOps & Cloud */}
      <h3 style={styles.subheading}>DevOps / Cloud Infrastructure</h3>
      <div style={styles.skills}>
        {devopsSkills.map((skill, index) => (
          <div
            key={index}
            style={{
              ...styles.skill,
              ...(hoveredSkill === `ops-${index}` ? styles.skillHover : {}),
            }}
            onMouseEnter={() => setHoveredSkill(`ops-${index}`)}
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
        {workflowSkills.map((skill, index) => (
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
  subheading: {
    fontSize: '28px',
    marginTop: '30px',
    color: '#f39c12',
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
  },
};

export default Skills;