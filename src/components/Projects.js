import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './Projects.css';
import animal from '../images/animal.png';
import flashcard from '../images/flashcard.png';
import giphy from '../images/giphy.png';
import todo from '../images/to-do list.png';
import killer from '../images/killer.png';
import killer2 from '../images/killer2.png';

// Set app element for accessibility
Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll the modal into view after it opens
  useEffect(() => {
    if (modalIsOpen) {
      // Scroll to the modal after it's opened
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [modalIsOpen]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const projectList = [
    {
      title: 'High-Availability Wordpress Infrastructure',
      description: 'Migrated legacy single-server WordPress site to high-availability infrastructure using Terraform and Ansible on DigitalOcean.',
      link: 'https://github.com/Tea-naa', 
      technologies: ['Terraform', 'Ansible', 'DigitalOcean', 'Apache', 'MySQL', 'Bash', 'Load Balancer', 'SSL/TLS'],
      image: null, 
      isInfraProject: true, // Flag to identify infrastructure projects
      details: [
        'Converted single-server setup to multi-node high-availability architecture with load balancer failover',
        'Automated disaster recovery scripts reducing restore time from hours to 15 minutes',
        'Implemented SSL certificate automation using acme.sh with DNS-01 challenge',
        'Deployed and tested multi-region infrastructure for global scaling',
        'Configured MySQL replication and Apache web servers across multiple nodes',
        'Created comprehensive technical documentation and runbooks for team operations',
      ],
    },
    {
      title: 'To-do List App',
      description: 'A full-stack CRUD to-do list application to manage daily tasks efficiently.',
      link: 'https://github.com/Tea-naa/Project-3.git',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
      image: todo,
    },
    {
      title: 'Animal Adoption Website',
      description: 'A responsive, bootstrap-based website for animal adoption.',
      link: 'https://github.com/Tea-naa/Animal-Adoption-Website.git',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      image: animal,
    },
    {
      title: 'Giphy Search Engine',
      description: 'A search-enabled website using the Giphy API for interactive and seamless content discovery.',
      link: 'https://github.com/Tea-naa/Project_2.git',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Giphy API'],
      image: giphy,
    },
    {
      title: 'Language Learning Flashcards',
      description: 'A React-based app that helps users learn new words by flipping flashcards with translations.',
      link: 'https://github.com/Tea-naa/language-learning-flashcards.git',
      technologies: ['React', 'JavaScript', 'CSS'],
      image: flashcard,
    },
    {
      title: 'Killer Knowledge App',
      description: 'A quiz app with category-based questions, user contributions, and efficient data handling via RESTful API.',
      link: 'https://github.com/Tea-naa/Project-4.git',
      technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'RESTful API'],
      images: [killer, killer2],
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(project)}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="click-to-view">Click to view more details!</p>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Project Modal"
    className="modal-content"
    overlayClassName="modal-overlay"
    closeTimeoutMS={300} // fade-out effect
  >
    <div className="project-card modal-project-card">
      <h2 className="modal-title">{selectedProject.title}</h2>

      <div className="modal-content-wrapper">
        {selectedProject.isInfraProject ? (
          <div className="infra-details">
            <div className="infra-icon">🏗️</div>
            <p className="infra-note">Infrastructure & DevOps Project</p>
            <ul className="infra-details-list">
              {selectedProject.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ) : selectedProject.images ? (
          <div className="modal-images">
            {selectedProject.images.map((image, idx) => (
              <a
                key={idx}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image}
                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                  className="modal-image-side-by-side"
                />
              </a>
            ))}
          </div>
        ) : selectedProject.image ? (
          <a
            href={selectedProject.image}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={selectedProject.image}
              alt={`${selectedProject.title} screenshot`}
              className="modal-image"
            />
          </a>
        ) : null}
      </div>

      <p className="modal-description">{selectedProject.description}</p>
      <hr className="description-divider" />
      <p className="technologies-used">
        <strong>Technologies Used:</strong>{' '}
        {selectedProject.technologies.join(', ')}
      </p>

      <div className="modal-buttons">
        <a
          className="project-link button-link"
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {selectedProject.isInfraProject ? 'View My GitHub' : 'Visit Project'}
        </a>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  </Modal>
)}

    </div>
  );
};

export default Projects;
