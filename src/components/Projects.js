import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './Projects.css';
import animal from '../images/animal.png';
import flashcard from '../images/flashcard.png';
import giphy from '../images/giphy.png';
import todo from '../images/to-do list.png';
import killer from '../images/killer.png';
import killer2 from '../images/killer2.png';

const Projects = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const projectList = [
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
                >
                    <div className="project-card modal-project-card">
                        <h2 className="modal-title">{selectedProject.title}</h2>
                        {selectedProject.images ? (
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
                        ) : (
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
                        )}
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
                                Visit Project
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
