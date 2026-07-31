// Home.jsx - Single-scroll landing page.
// Inspired by greg-christian-portfolio.webflow.io's scroll-linked brightness
// trick (dim -> bright as text crosses center), combined with real gold glow
// pops. Recruiters get the full story (work, projects, skills, contact)
// without clicking through every nav tab.

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SkillsBanner from "./SkillsBanner";
import BrowserFrame from "./BrowserFrame";
import "../styles/Home.css";

// Magnetic-hover effect for the CTA buttons.
function useMagnetic(strength = 0.25) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("translate(0px, 0px)");

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setTransform(`translate(${x * strength}px, ${y * strength}px)`);
  };

  const onMouseLeave = () => setTransform("translate(0px, 0px)");

  return { ref, style: { transform }, onMouseMove, onMouseLeave };
}

// Subtle 3D tilt following the cursor, used on work rows.
function useTilt(maxTilt = 7) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: "perspective(700px) rotateX(0deg) rotateY(0deg)" });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * maxTilt;
    const rotateY = (px - 0.5) * maxTilt;
    setStyle({ transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
  };

  const onMouseLeave = () => {
    setStyle({ transform: "perspective(700px) rotateX(0deg) rotateY(0deg)" });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}

// The signature scroll moment: each line dims to a ghost and glows gold-bright
// as it crosses the vertical center of the viewport.
function StackList({ items }) {
  const refs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    let raf = null;

    const update = () => {
      const center = window.innerHeight / 2;
      refs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - center);
        const proximity = Math.max(0, 1 - dist / (window.innerHeight * 0.45));
        el.style.opacity = (0.16 + proximity * 0.84).toFixed(2);
        el.style.textShadow =
          proximity > 0.55
            ? `0 0 ${28 * proximity}px rgba(232, 180, 88, ${0.55 * proximity})`
            : "none";
        el.style.color = proximity > 0.55 ? "#fff" : "#6b6b6b";
      });
      raf = null;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="stack-list">
      {items.map((item, i) => (
        <div key={item} ref={(el) => (refs.current[i] = el)} className="stack-item">
          {item}
        </div>
      ))}
    </div>
  );
}

// One project row — glowing on hover, tilting toward the cursor, and telling
// the sticky preview panel next to it which project to show.
function WorkRow({ project, index, isActive, onActivate }) {
  const tilt = useTilt(8);

  const handleMove = (e) => {
    tilt.onMouseMove(e);
    onActivate(index);
  };

  const inner = (
    <>
      <span className="work-index">0{index + 1}</span>
      <span className="work-info">
        <span className="work-title">{project.title}</span>
        <span className="work-subtitle">{project.subtitle}</span>
        <span className="work-meta">
          {project.company} &middot; {project.tech.join(" / ")}
        </span>
      </span>
      {project.href && <span className="work-arrow">&rarr;</span>}
    </>
  );

  const className = `work-row${isActive ? " work-row-active" : ""}`;

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        ref={tilt.ref}
        style={tilt.style}
        onMouseEnter={() => onActivate(index)}
        onMouseMove={handleMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      className={`${className} work-row-static`}
      ref={tilt.ref}
      style={tilt.style}
      onMouseEnter={() => onActivate(index)}
      onMouseMove={handleMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      {inner}
    </div>
  );
}

// Sticky preview panel — shows the real screenshot (in a browser-window
// frame) for whichever project row is active.
function WorkPreviewPanel({ project }) {
  if (!project) return null;

  return (
    <div className="work-preview-frame" key={project.title}>
      <BrowserFrame
        images={project.images}
        alt={`${project.title} screenshot`}
        label={project.frameLabel}
      />
    </div>
  );
}

// Fixed dot rail tracking which section of the page is in view.
const SPY_SECTIONS = [
  { id: "s-hero", label: "Intro" },
  { id: "s-what", label: "What I Do" },
  { id: "s-work", label: "Work" },
  { id: "s-about", label: "About" },
  { id: "s-contact", label: "Contact" },
];

function ScrollSpy() {
  const [active, setActive] = useState(SPY_SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const elements = SPY_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="scrollspy" aria-label="Jump to section">
      {SPY_SECTIONS.map((s) => (
        <button
          key={s.id}
          type="button"
          className={`scrollspy-dot${active === s.id ? " active" : ""}`}
          onClick={() => scrollToSection(s.id)}
          aria-label={s.label}
          title={s.label}
        />
      ))}
    </nav>
  );
}

const featuredProjects = [
  {
    title: "TipTrack",
    subtitle: "Kubernetes MERN Tip Tracker",
    company: "Personal Project",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    href: "https://github.com/Tea-naa/tiptrack",
    images: [
      { src: "/projects/tiptrack-dashboard.jpg", ratio: 1.48 },
      { src: "/projects/tiptrack-tax.jpg", ratio: 0.518 },
    ],
    frameLabel: "TipTrack",
  },
  {
    title: "AI-Powered Operations Platform",
    subtitle: "AI-driven SaaS for ops, procurement & supply chain",
    company: "SuppliFlex",
    tech: ["Terraform", "AWS", "OAuth 2.0", "NestJS"],
    href: "https://www.suppliflex.tech/",
    images: [{ src: "/projects/suppliflex-site.jpg", ratio: 1.627 }],
    frameLabel: "suppliflex.tech",
  },
  {
    title: "HA WordPress Infrastructure",
    subtitle: "Disaster recovery cut from hours to minutes via Ansible",
    company: "Addteq",
    tech: ["Terraform", "Ansible", "MySQL", "SSL"],
    href: "https://addteq.com/",
    images: [{ src: "/projects/addteq-site.jpg", ratio: 1.513 }],
    frameLabel: "addteq.com",
  },
  {
    title: "Killer Knowledge Quiz App",
    subtitle: "Category quiz app with a RESTful API",
    company: "Bootcamp Project",
    tech: ["Node.js", "Express", "MySQL", "REST API"],
    href: "https://github.com/Tea-naa/Project-4",
    images: [
      { src: "/projects/quiz-login.jpg", ratio: 0.706 },
      { src: "/projects/quiz-2.jpg", ratio: 0.713 },
    ],
    frameLabel: "Killer Knowledge Quiz",
  },
  {
    title: "Language Learning Flashcards",
    subtitle: "Flip-animation vocabulary flashcards",
    company: "Personal Project",
    tech: ["React", "JavaScript", "CSS"],
    href: "https://github.com/Tea-naa/language-learning-flashcards",
    images: [{ src: "/projects/flashcards.jpg", ratio: 0.895 }],
    frameLabel: "Language Flashcards",
  },
  {
    title: "To-do List App",
    subtitle: "Full-stack CRUD task manager",
    company: "Bootcamp Project",
    tech: ["React", "Node.js", "Express"],
    href: "https://github.com/Tea-naa/Project-3",
    images: [{ src: "/projects/todo-list.jpg", ratio: 0.683 }],
    frameLabel: "To-do List App",
  },
  {
    title: "Animal Adoption Website",
    subtitle: "Responsive Bootstrap adoption site",
    company: "Bootcamp Project",
    tech: ["HTML", "CSS", "Bootstrap"],
    href: "https://github.com/Tea-naa/Animal-Adoption-Website",
    images: [{ src: "/projects/animal-adoption.jpg", ratio: 0.888 }],
    frameLabel: "Animal Adoption",
  },
  {
    title: "Giphy Search Engine",
    subtitle: "Dynamic GIF search using the Giphy API",
    company: "Bootcamp Project",
    tech: ["HTML", "CSS", "JavaScript", "Giphy API"],
    href: "https://github.com/Tea-naa/Project_2",
    images: [{ src: "/projects/giphy-search.jpg", ratio: 1.34 }],
    frameLabel: "Giphy Search",
  },
];

function Home() {
  const magneticPrimary = useMagnetic(0.2);
  const magneticSecondary = useMagnetic(0.2);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  return (
    <div className="home">
      <ScrollSpy />

      {/* ============ HERO ============ */}
      <section id="s-hero" className="hero hero-minimal">
        <p className="hero-eyebrow hero-line hero-line-1">Cloud &middot; DevOps &middot; Full Stack</p>

        <h1 className="hero-name hero-name-huge hero-line hero-line-2">
          <span className="glow">Tina Bajwa</span>
        </h1>

        <p className="hero-tagline hero-tagline-wide hero-line hero-line-3">
          Cloud Engineering, DevOps, SRE, Full-Stack &mdash; I like figuring out how all the
          pieces fit together.
        </p>

        <div className="hero-buttons hero-line hero-line-4">
          <Link
            to="/projects"
            className="btn btn-primary btn-magnetic btn-glow"
            ref={magneticPrimary.ref}
            style={magneticPrimary.style}
            onMouseMove={magneticPrimary.onMouseMove}
            onMouseLeave={magneticPrimary.onMouseLeave}
          >
            <span>View Projects</span>
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-magnetic"
            ref={magneticSecondary.ref}
            style={magneticSecondary.style}
            onMouseMove={magneticSecondary.onMouseMove}
            onMouseLeave={magneticSecondary.onMouseLeave}
          >
            <span>Download Resume</span>
          </a>
        </div>

        <div className="scroll-cue hero-line hero-line-5" aria-hidden="true">
          <span className="scroll-cue-dot" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ============ TECH STACK — compact strip, right under the hero ============ */}
      <SkillsBanner />

      {/* ============ WHAT I DO — scroll-linked stack ============ */}
      <section id="s-what" className="section stack-section">
        <p className="section-eyebrow">
          <span className="eyebrow-dot" />
          What I Do
        </p>
        <StackList
          items={[
            "CLOUD INFRASTRUCTURE",
            "FULL-STACK DEVELOPMENT",
            "CI / CD AUTOMATION",
            "SITE RELIABILITY",
            "INFRASTRUCTURE AS CODE",
          ]}
        />
      </section>

      {/* ============ WORK — everything, Greg-style ============ */}
      <section id="s-work" className="section work-section">
        <Reveal>
          <div className="section-header">
            <p className="section-eyebrow">
              <span className="eyebrow-dot" />
              My Work
            </p>
            <Link to="/projects" className="section-link">Project details &rarr;</Link>
          </div>
        </Reveal>

        <div className="work-grid">
          <div className="work-list">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.title} delay={i * 90}>
                <WorkRow
                  project={project}
                  index={i}
                  isActive={activeWorkIndex === i}
                  onActivate={setActiveWorkIndex}
                />
              </Reveal>
            ))}
          </div>

          <div className="work-preview">
            <WorkPreviewPanel project={featuredProjects[activeWorkIndex]} />
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section id="s-about" className="section about-preview-section">
        <Reveal>
          <div className="about-preview">
            <div className="about-preview-photo">
              <img
                src="/profile.jpg"
                alt="Tina Bajwa"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="about-preview-placeholder" style={{ display: "none" }} />
            </div>

            <div className="about-preview-text">
              <p className="section-eyebrow">
                <span className="eyebrow-dot" />
                About
              </p>
              <p className="about-preview-blurb">
                I taught myself to code out of necessity, then went all in &mdash; a bootcamp,
                an SRE internship at Addteq cutting disaster recovery time from hours to minutes,
                and a Cloud/DevOps &amp; Full-Stack internship at SuppliFlex helping build an
                AI-powered operations platform, including OAuth integrations built from scratch.
                I like fixing things that break in production and automating away the toil that
                shouldn&apos;t exist.
              </p>
              <Link to="/about" className="section-link">Read the full story &rarr;</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section id="s-contact" className="section contact-cta-section">
        <Reveal>
          <p className="section-eyebrow contact-eyebrow">
            <span className="eyebrow-dot" />
            Get In Touch
          </p>
          <h2 className="contact-cta-title">
            <span className="glow">Let&apos;s build</span> something.
          </h2>

          <div className="hero-buttons contact-cta-buttons">
            <a href="mailto:TinaMarie.Bajwa@gmail.com" className="btn btn-primary btn-glow">
              <span>Say Hello</span>
            </a>
            <Link to="/contact" className="btn btn-secondary">
              <span>Contact Page</span>
            </Link>
          </div>

          <div className="hero-social contact-cta-social">
            <a
              href="https://github.com/Tea-naa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/tina-bajwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Resume"
              title="Resume"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
              </svg>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Home;
