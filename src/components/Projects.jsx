// Projects.jsx - Dedicated projects page. Shows every project, Greg-style —
// featured internship/personal work gets full descriptions, the rest still
// get real screenshots + browser-frame treatment, just as compact cards.

import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';
import BrowserFrame from './BrowserFrame';
import '../styles/Projects.css';

const featured = [
  {
    title: "TipTrack – Kubernetes MERN Tip Tracker",
    company: "Personal Project",
    type: "Full-Stack Application",
    featured: true,
    description: "Real-time tip & tax tracker with MongoDB persistence. Built with JWT authentication and role-based access control, containerized with Docker, and deployed on Kubernetes (Minikube) with self-healing pods — ConfigMaps, Secrets, PVCs, and liveness/readiness probes across a three-tier architecture.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "Kubernetes", "Minikube", "PVCs", "Nginx", "JWT"],
    link: "https://github.com/Tea-naa/tiptrack",
    linkLabel: "View on GitHub",
    image: "/projects/tiptrack-dashboard.jpg",
    frameLabel: "TipTrack",
  },
  {
    title: "AI-Powered Operations Platform",
    company: "SuppliFlex",
    type: "Cloud / DevOps & Full-Stack",
    description: "Helped build SuppliFlex's AI-powered SaaS platform for operations, procurement, and supply chain management — a single source of truth unifying inventory, purchasing, suppliers, returns, and third-party systems, designed to proactively surface issues and recommendations before they become costly. Built OAuth 2.0 integrations with Shopify, Amazon SP-API, QuickBooks, Xero, and Zoho from scratch, configured AWS Cognito, IAM Identity Center, Route 53, CloudFront, S3, WorkMail, and an Amazon Connect deployment, and authored Terraform IaC for deployment automation. Validated APIs and end-to-end workflows to prepare the platform for pilot launch.",
    tech: ["Terraform", "AWS Cognito", "IAM", "Amazon Connect", "S3", "CloudFront", "Route 53", "WorkMail", "OAuth 2.0", "Amazon SP-API", "NestJS", "TypeScript", "React"],
    link: "https://www.suppliflex.tech/",
    linkLabel: "Visit suppliflex.tech",
    image: "/projects/suppliflex-site.jpg",
    frameLabel: "suppliflex.tech",
  },
  {
    title: "High-Availability WordPress Infrastructure",
    company: "Addteq",
    type: "SRE / DevOps",
    description: "Multi-node HA setup with automated load-balancer failover, fast disaster recovery (hours to minutes) via idempotent Ansible snapshots, and automated SSL renewal with acme.sh + DNS-01 validation.",
    tech: ["Terraform", "Ansible", "DigitalOcean", "MySQL", "Apache", "SSL", "Load Balancer"],
    link: "https://addteq.com/",
    linkLabel: "Visit addteq.com",
    image: "/projects/addteq-site.jpg",
    frameLabel: "addteq.com",
  },
];

const more = [
  {
    title: "Killer Knowledge Quiz App",
    company: "Bootcamp Project",
    tech: ["Node.js", "Express", "MySQL", "REST API"],
    github: "https://github.com/Tea-naa/Project-4",
    image: "/projects/quiz-login.jpg",
    frameLabel: "Killer Knowledge Quiz",
  },
  {
    title: "Language Learning Flashcards",
    company: "Personal Project",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Tea-naa/language-learning-flashcards",
    image: "/projects/flashcards.jpg",
    frameLabel: "Language Flashcards",
  },
  {
    title: "To-do List App",
    company: "Bootcamp Project",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/Tea-naa/Project-3",
    image: "/projects/todo-list.jpg",
    frameLabel: "To-do List App",
  },
  {
    title: "Animal Adoption Website",
    company: "Bootcamp Project",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Tea-naa/Animal-Adoption-Website",
    image: "/projects/animal-adoption.jpg",
    frameLabel: "Animal Adoption",
  },
  {
    title: "Giphy Search Engine",
    company: "Bootcamp Project",
    tech: ["HTML", "CSS", "JavaScript", "Giphy API"],
    github: "https://github.com/Tea-naa/Project_2",
    image: "/projects/giphy-search.jpg",
    frameLabel: "Giphy Search",
  }
];

// Fullscreen click-to-enlarge viewer for project screenshots.
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!src) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function Projects() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="projects-page">
      {/* Page Header */}
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          A collection of things I've built and deployed
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="projects-grid">
        {featured.map((project, index) => (
          <Reveal key={index} delay={(index % 3) * 80}>
            <div className={`project-card${project.featured ? ' featured' : ''}`}>
              <div className="project-image-wrap">
                <BrowserFrame
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  label={project.frameLabel}
                  onClick={() => setLightbox({ src: project.image, alt: project.title })}
                  className="project-image-frame"
                />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div>
                    {project.featured && <span className="featured-badge">Featured</span>}
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-company">{project.company}</p>
                  </div>
                  <span className="project-type">{project.type}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {project.linkLabel}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Every other project — shown directly, no toggle to hide behind */}
      <div className="more-projects">
        <p className="more-projects-heading">More Projects</p>
        <div className="more-projects-grid">
          {more.map((project, index) => (
            <Reveal key={index} delay={(index % 3) * 60}>
              <div className="more-project-card">
                <div className="more-project-image-wrap">
                  <BrowserFrame
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    label={project.frameLabel}
                    onClick={() => setLightbox({ src: project.image, alt: project.title })}
                    className="more-project-image-frame"
                  />
                </div>
                <div className="more-project-body">
                  <span className="more-project-title">{project.title}</span>
                  <span className="more-project-company">{project.company}</span>
                  <span className="more-project-tech">{project.tech.join(" / ")}</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-project-link"
                  >
                    View on GitHub &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

export default Projects;
