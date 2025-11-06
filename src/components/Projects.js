import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './Projects.css';

// Import your TipTrack screenshots (add to src/images/)
import tiptrackTax from '../images/tiptrack-tax.png';
import tiptrackAdd from '../images/tiptrack-add.png';
import tiptrackCal from '../images/tiptrack-calendar.png';
import tiptrackDash from '../images/tiptrack-dashboard.png';

// Other project images
import animal from '../images/animal.png';
import flashcard from '../images/flashcard.png';
import giphy from '../images/giphy.png';
import todo from '../images/to-do list.png';
import killer from '../images/killer.png';
import killer2 from '../images/killer2.png';

Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (modalIsOpen) {
      const modal = document.querySelector('.modal-content');
      modal?.scrollIntoView({ behavior: 'smooth' });
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
      title: 'TipTrack – Kubernetes MERN Tip Tracker',
      description: 'Real-time tip & tax tracker with MongoDB persistence. Deployed on Minikube with self-healing pods.',
      link: 'https://github.com/Tea-naa/tiptrack',
      demoLink: null, // Add later if you host a demo
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes', 'Minikube', 'PVCs', 'Nginx'],
      images: [tiptrackTax, tiptrackAdd, tiptrackCal, tiptrackDash],
      isFeatured: true,
    },
    {
      title: 'High-Availability WordPress Infrastructure',
      description: 'Multi-node HA setup with Terraform, Ansible, and 15-min disaster recovery.',
      link: 'https://github.com/Tea-naa',
      technologies: ['Terraform', 'Ansible', 'DigitalOcean', 'MySQL', 'Apache', 'SSL', 'Load Balancer'],
      isInfraProject: true,
      details: [
        'Automated HA with load balancer failover',
        '15-minute DR via idempotent snapshots',
        'SSL auto-renewal (acme.sh + DNS-01)',
        'MySQL replication + health checks',
        'Runbooks in Confluence',
      ],
    },
    {
      title: 'Killer Knowledge Quiz App',
      description: 'Category-based quiz with user contributions and RESTful API.',
      link: 'https://github.com/Tea-naa/Project-4.git',
      technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'RESTful API'],
      images: [killer, killer2],
    },
    {
      title: 'Language Learning Flashcards',
      description: 'Interactive React app with flip animations for vocabulary.',
      link: 'https://github.com/Tea-naa/language-learning-flashcards.git',
      technologies: ['React', 'JavaScript', 'CSS'],
      image: flashcard,
    },
    {
      title: 'To-do List App',
      description: 'Full-stack CRUD task manager with clean UI.',
      link: 'https://github.com/Tea-naa/Project-3.git',
      technologies: ['React', 'Node.js', 'Express', 'CSS'],
      image: todo,
    },
    {
      title: 'Animal Adoption Website',
      description: 'Responsive Bootstrap site for pet adoption.',
      link: 'https://github.com/Tea-naa/Animal-Adoption-Website.git',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      image: animal,
    },
    {
      title: 'Giphy Search Engine',
      description: 'Dynamic search using Giphy API.',
      link: 'https://github.com/Tea-naa/Project_2.git',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Giphy API'],
      image: giphy,
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${project.isFeatured ? 'featured-card' : ''}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(project)}
          >
            {project.isFeatured && <div className="featured-badge">Featured</div>}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="click-to-view">Click to view details</p>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
          closeTimeoutMS={300}
        >
          <div className="project-card modal-project-card">
            <h2 className="modal-title">{selectedProject.title}</h2>

            <div className="modal-content-wrapper">
              {selectedProject.isInfraProject ? (
                <div className="infra-details">
                  <div className="infra-icon">DevOps</div>
                  <p className="infra-note">Infrastructure Project</p>
                  <ul className="infra-details-list">
                    {selectedProject.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ) : selectedProject.images ? (
                <div className="modal-images">
                  {selectedProject.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="modal-image-side-by-side"
                    />
                  ))}
                </div>
              ) : selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              ) : null}
            </div>

            <p className="modal-description">{selectedProject.description}</p>
            <hr className="description-divider" />

            <p className="technologies-used">
              <strong>Tech:</strong> {selectedProject.technologies.join(' • ')}
            </p>

            <div className="modal-buttons">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                View on GitHub
              </a>
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                  style={{ backgroundColor: '#00ffcc', color: '#1c1c1c' }}
                >
                  Live Demo
                </a>
              )}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;