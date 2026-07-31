// Contact.jsx - Contact page (mailto fallback, no backend)

import React, { useState } from 'react';
import Reveal from './Reveal';
import '../styles/Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:TinaMarie.Bajwa@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-page-glow" aria-hidden="true" />

      <div className="contact-wrap">
        <Reveal>
          <div className="contact-intro">
            <p className="section-eyebrow"><span className="eyebrow-dot" />Get In Touch</p>
            <h1 className="contact-hero-title">
              Let&apos;s build <span className="glow">something great</span> together.
            </h1>
            <p className="contact-hero-sub">
              Open to Cloud, DevOps, SRE, and Full-Stack roles. Reach out directly, or send
              a note and I&apos;ll get back to you.
            </p>

            <div className="contact-direct-links">
              <a href="mailto:TinaMarie.Bajwa@gmail.com" className="contact-direct-link">
                <span className="contact-direct-label">Email</span>
                <span className="contact-direct-value">TinaMarie.Bajwa@gmail.com <span className="contact-direct-arrow">&rarr;</span></span>
              </a>
              <a
                href="https://www.linkedin.com/in/tina-bajwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-direct-link"
              >
                <span className="contact-direct-label">LinkedIn</span>
                <span className="contact-direct-value">in/tina-bajwa <span className="contact-direct-arrow">&rarr;</span></span>
              </a>
              <a
                href="https://github.com/Tea-naa"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-direct-link"
              >
                <span className="contact-direct-label">GitHub</span>
                <span className="contact-direct-value">Tea-naa <span className="contact-direct-arrow">&rarr;</span></span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-direct-link">
                <span className="contact-direct-label">Resume</span>
                <span className="contact-direct-value">Download PDF <span className="contact-direct-arrow">&rarr;</span></span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="contact-form-sexy">
            <div className="form-field">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" "
                value={form.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Your name</label>
            </div>

            <div className="form-field">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Your email</label>
            </div>

            <div className="form-field">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">What are you thinking?</label>
            </div>

            <button type="submit" className="btn btn-primary btn-glow contact-submit-btn">
              <span>Send Message</span>
            </button>

            {sent && (
              <p className="contact-sent-note">
                Your email app should be opening now — thanks for reaching out!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}

export default Contact;
