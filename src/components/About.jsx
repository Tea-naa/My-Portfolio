// About.jsx - About page with your photo and bio

import React from 'react';
import Reveal from './Reveal';
import '../styles/About.css';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'Cloud & DevOps',
    tags: [
      'AWS (Cognito, IAM, S3, CloudFront, Route 53, ECS/Fargate, RDS)',
      'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Minikube', 'DigitalOcean',
      'GitHub Actions', 'CI/CD', 'Bash / Linux', 'Nginx', 'Apache',
      'Load Balancer Configuration', 'Firewall (UFW)',
    ],
  },
  {
    title: 'Full-Stack Development',
    tags: [
      'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'NestJS', 'Express.js',
      'HTML5', 'CSS3', 'Bootstrap', 'REST APIs', 'OAuth 2.0', 'JWT Authentication',
      'Prisma ORM', 'PostgreSQL', 'MySQL', 'MongoDB', 'Git / GitHub', 'Postman', 'VS Code',
    ],
  },
  {
    title: 'Professional Skills',
    tags: [
      'Infrastructure as Code', 'High-Availability Architecture', 'Disaster Recovery & Backups',
      'CI/CD Pipeline Automation', 'Monitoring & Alerting', 'System Troubleshooting & Root Cause Analysis',
      'Agile / Scrum', 'Technical Documentation & Runbooks',
    ],
  },
];

const certifications = [
  'AWS Certified Solutions Architect – Associate (SAA-C03)',
  'Certified ScrumMaster® (CSM)',
  'Docker Fundamentals — SimpliLearn',
  'Confluence Fundamentals — Atlassian',
  'Jira Fundamentals — Coursera',
];

function About() {
  return (
    <div className="about">
      <div className="about-container">
        
        {/* PHOTO SECTION */}
        <div className="about-photo">
          <div className="about-photo-circle">
            <img
              src="/profile.jpg"
              alt="Tina Bajwa"
              className="about-photo-img"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="photo-placeholder" style={{ display: 'none' }}>
              <span>Your Photo</span>
            </div>
            <div className="about-photo-overlay">
              <span>Cloud &amp; DevOps Engineer</span>
              <span>Full-Stack Developer</span>
            </div>
          </div>
        </div>

        {/* BIO SECTION */}
        <div className="about-content">
          <h1 className="about-title">Hey, I&apos;m Tina</h1>

          <div className="about-text">
            <p>
              I used to run an e-commerce business. Needed a website, no budget — so I taught
              myself to code on YouTube. The moment my first site went live, I was hooked. That's
              when I realized I could build solutions to real problems with code.
            </p>

            <p>
              Fast forward: I earned a Software Engineering Certificate through the University of
              Texas at Arlington, landed an SRE internship at
              <strong> Addteq</strong>, and cut disaster recovery time from hours to minutes with
              Terraform + Ansible. Most recently, I wrapped a Cloud/DevOps & Software Engineering
              internship at <strong> SuppliFlex</strong>, building Terraform IaC for an Amazon
              Connect deployment and untangling OAuth integrations across half a dozen platforms.
            </p>

            <p>
              I'm a certified Scrum Master® who thrives in collaborative environments where I can
              wear multiple hats. My hospitality background taught me that the best solutions come
              from understanding what people actually need — not just what they say they need —
              and my technical skills let me build those solutions. I'm always looking to learn,
              improve systems, and tackle interesting challenges, regardless of whether they fall
              under "development," "operations," or somewhere in between.
            </p>
          </div>

          <div className="about-scroll-hint" aria-hidden="true">
            <span className="about-scroll-hint-dot" />
            Scroll for experience, skills &amp; certifications
          </div>

          {/* EXPERIENCE TIMELINE */}
          <Reveal>
            <div className="experience">
              <h2 className="experience-title">Experience</h2>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Cloud / DevOps & Software Engineering Intern</h3>
                  <span className="experience-company">SuppliFlex</span>
                </div>
                <p className="experience-date">Feb 2026 - Jun 2026</p>
                <p className="experience-description">
                  Helped build SuppliFlex's AI-powered SaaS platform for operations, procurement,
                  and supply chain management — a single source of truth unifying inventory,
                  purchasing, suppliers, and third-party systems. Built OAuth 2.0 integrations
                  with Shopify, Amazon SP-API, QuickBooks, Xero, and Zoho from scratch, configured
                  AWS Cognito, IAM Identity Center, Route 53, CloudFront, S3, WorkMail, and an
                  Amazon Connect deployment, and authored Terraform IaC for deployment automation.
                  Directed backend feature work in NestJS, TypeScript, and React, and authored
                  FRDs/PRDs to support MVP release readiness.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Site Reliability Engineering Intern</h3>
                  <span className="experience-company">Addteq</span>
                </div>
                <p className="experience-date">Apr 2025 - Aug 2025</p>
                <p className="experience-description">
                  Automated infrastructure provisioning across DEV, QA, and PROD with Terraform
                  and Ansible, built a disaster recovery workflow that cut restore time from hours
                  to minutes, and deployed a DigitalOcean Managed MySQL cluster with automated
                  SSL lifecycle management and monitoring.
                </p>
              </div>
            </div>
          </Reveal>

          {/* EDUCATION */}
          <Reveal delay={80}>
            <div className="experience">
              <h2 className="experience-title">Education</h2>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Software Engineering Certificate</h3>
                  <span className="experience-company">University of Texas at Arlington</span>
                </div>
                <p className="experience-date">2024</p>
                <p className="experience-description">
                  QuickStart Coding Boot Camp — 500+ hours covering JavaScript, React, Node.js,
                  Express.js, MySQL, MongoDB, REST APIs, Git/GitHub, CI/CD, and Agile/Scrum.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>B.A., Advertising &amp; Marketing Communications</h3>
                  <span className="experience-company">Columbia College Chicago</span>
                </div>
                <p className="experience-date">2012</p>
              </div>
            </div>
          </Reveal>

          {/* SKILLS */}
          <Reveal delay={160}>
            <div className="experience skills-categories skills-categories-inline">
              <h2 className="experience-title">Skills</h2>
              {skillCategories.map((cat) => (
                <div key={cat.title} className="skills-category">
                  <h3 className="skills-category-title">{cat.title}</h3>
                  <div className="skills-tag-grid">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="skills-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CERTIFICATIONS */}
          <Reveal delay={200}>
            <div className="experience">
              <h2 className="experience-title">Certifications</h2>
              <div className="certs-grid">
                {certifications.map((cert) => (
                  <span key={cert} className="cert-chip">{cert}</span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </div>
  );
}

export default About;