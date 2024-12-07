import React from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Me</h2>
            <form action="mailto:TinaMarie.Bajwa@gmail.com" method="post" encType="text/plain" className="contact-form">
                <div className="input-group">
                    <label htmlFor="name" className="label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="message" className="label">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="textarea"
                        required
                    />
                </div>
                <button type="submit" className="button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
