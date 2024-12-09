import React from 'react';
import './Badges.css'; 
import badge1 from '../badges/1.png'; 
import badge2 from '../badges/2.png'; 
import badge3 from '../badges/3.png'; 
import badge4 from '../badges/4.png'; 
import badge5 from '../badges/5.png';
import badge6 from '../badges/6.png';
import badge7 from '../badges/7.png';
import badge8 from '../badges/8.png';
import badge9 from '../badges/9.png';
import badge13 from '../badges/13.png';
import badge10 from '../badges/10.png';
import badge11 from '../badges/11.png';
import badge12 from '../badges/12.png';
import badge14 from '../badges/14.png';
import badge15 from '../badges/15.png';
import badge16 from '../badges/16.png';
import badge17 from '../badges/17.png';
import badge18 from '../badges/18.png';
import badge21 from '../badges/21.png';

const badgesList = [
    { img: badge4, title: "Certified ScrumMaster® (CSM)", link: 'https://bcert.me/sixsqutgv', type: 'image' },
    { img: badge1, title: "Data Structures & Algorithm Theory", link: 'https://www.credly.com/badges/06bfd03a-4e07-4330-860b-3773d75d5f43/linked_in_profile', type: 'image' },
    { img: badge2, title: "Dynamic and Interactive Web Pages - Beginners JavaScript DOM", link: 'https://www.credly.com/badges/78a2ca0e-71ee-4d65-a035-c629504f7f84/linked_in_profile', type: 'image' },
    { img: badge3, title: "Fundamentals of Modern JavaScript - ES6 and Beyond", link: 'https://www.credly.com/badges/b4fec986-12eb-4078-bcb6-4ea45ce6b1a0/linked_in_profile', type: 'image' },
    { img: badge5, title: "Introduction to Bootstrap", link: 'https://www.credly.com/badges/176a6707-c32e-4990-8671-cf22250ca921/linked_in_profile', type: 'image' },
    { img: badge6, title: "Introduction to HTML and CSS", link: 'https://www.credly.com/badges/d5f01e33-b797-4a6d-8071-a4cfe26ec22c/linked_in_profile', type: 'image' },
    { img: badge7, title: "Introduction to React", link: 'https://www.credly.com/badges/451c1165-1337-45e0-9708-7197c454f79e', type: 'image' },
    { img: badge8, title: "Scrum and Agile Immersion", link: 'https://www.credly.com/badges/9ded4d55-fb9d-4035-9906-8829886558d0', type: 'image' },
    { img: badge9, title: "Principles of Software Engineering I", link: 'https://www.credly.com/badges/1c921061-88ec-4a28-b05f-d2e9a019b8c3', type: 'image' },
    { img: badge10, title: "Principles of Software Engineering II: System Design", link: 'https://www.credly.com/badges/7267b307-8697-4735-b8dd-575bd2674577', type: 'image' },
    { img: badge13, title: "Principles of Software Engineering III: Software design, UML", link: 'https://www.credly.com/badges/3447b73d-923c-4b0f-a829-67af1d4a80d8', type: 'image' },
    { img: badge11, title: "Starting with Git & GitHub", link: 'https://www.credly.com/badges/7dcce353-c8b7-494d-8783-0c859704393b', type: 'image' },
    { img: badge12, title: "JavaScript Async", link: 'https://www.credly.com/badges/c712528b-f998-4931-aed1-9d58a5280d31', type: 'image' },
    { img: badge14, title: "JavaScript Objects and OOP Programming with JavaScript", link: 'https://www.credly.com/badges/f974f589-b8b2-4e3d-94fa-4ca3282630c8', type: 'image' },
    { img: badge15, title: "Introduction to UX and Product Management", link: 'https://www.credly.com/badges/d511a7b7-734a-4db4-b9e7-79a893fc1aac', type: 'image' },
    { img: badge16, title: "Node.js - From Zero to Web Apps", link: 'https://www.credly.com/badges/720a6e56-7f2a-43f0-867a-fc33357fd252', type: 'image' },
    { img: badge17, title: "Querying Data with SQL", link: 'https://www.credly.com/badges/ce8cbcf0-3b24-48a5-ba4c-a58d8eab7298', type: 'image' },
    { img: badge18, title: "Introduction to FastAPI", link: 'https://www.credly.com/badges/d8afc3f0-8893-4b20-8bfc-f37809365f47', type: 'image' },
    { img: badge21, title: "Getting Started with Docker Certificate", link: 'https://simpli-web.app.link/e/maeRYWEUaPb', type: 'image' },
    { title: "AWS Cloud Practitioner Essentials Certificate", link: 'https://explore.skillbuilder.aws/learn/course/134/aws-cloud-practitioner-essentials', type: 'pdf' },
    { title: "Get the most out of Confluence Certificate", link: 'https://university.atlassian.com/student/award/fQ8VpxkH79j1z8GjkPok1usv', type: 'pdf' },
    { title: "Get Started with Jira Certificate", link: 'https://www.coursera.org/account/accomplishments/certificate/N2Q6CVA44CJN', type: 'pdf' },
    { title: "Trello for Beginners Certificate", link: 'https://www.coursera.org/account/accomplishments/certificate/RCT5WCBMFJ8F', type: 'pdf' },
];
const Badges = () => {
    return (
        <div className="container">
            <h2 className="heading">My Certificates</h2>
            <p className="click-instruction">Click on a certificate to see the credentials.</p>
            <div className="badges">
                {badgesList.map((badge, index) => (
                    <div key={index} className="badge">
                        {badge.type === 'image' ? (
                            <a href={badge.link} target="_blank" rel="noopener noreferrer">
                                <img src={badge.img} alt={badge.title} className="image" />
                                <div className="title">{badge.title}</div>
                            </a>
                        ) : (
                            <div>
                                {/* For PDF badges */}
                                <a href={badge.link} target="_blank" rel="noopener noreferrer" className="pdf-badge-link">
                                    <i className="fa-regular fa-file-pdf" style={{ fontSize: '2rem', color: '#e74c3c' }}></i>
                                    <div className="title">{badge.title}</div>
                                </a>
                               
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Add the Download My Credentials button */}
            <div className="credential-link-container">
                <a 
                    href="Tina Bajwa's Credentials.pdf" // Update path if needed
                    download="Tina_Bajwa_Credentials.pdf"
                    className="credential-link"
                >
                    Download My Credentials (PDF)
                </a>
            </div>
        </div>
    );
};

export default Badges;