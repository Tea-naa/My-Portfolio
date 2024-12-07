import React from 'react';
import './Badges.css'; 
import badge1 from '../badges/1.png'; 
import badge2 from '../badges/2.png'; 
import badge3 from '../badges/3.png'; 
import badge4 from '../badges/4.png'; 
import badge5 from '../badges/5.png';
import badge6 from '../badges/6.png';

const Badges = () => {
    const badgesList = [
        { img: badge4, title: "Certified ScrumMaster® (CSM)", link: 'https://bcert.me/sixsqutgv' },
        { img: badge1, title: "Data Structures & Algorithm Theory", link: 'https://www.credly.com/badges/06bfd03a-4e07-4330-860b-3773d75d5f43/linked_in_profile' },
        { img: badge2, title: "Dynamic and Interactive Web Pages - Beginners JavaScript DOM", link: 'https://www.credly.com/badges/78a2ca0e-71ee-4d65-a035-c629504f7f84/linked_in_profile' },
        { img: badge3, title: "Fundamentals of Modern JavaScript - ES6 and Beyond", link: 'https://www.credly.com/badges/b4fec986-12eb-4078-bcb6-4ea45ce6b1a0/linked_in_profile' },
        { img: badge5, title: "Introduction to Bootstrap", link: 'https://www.credly.com/badges/176a6707-c32e-4990-8671-cf22250ca921/linked_in_profile' },
        { img: badge6, title: "Introduction to HTML and CSS", link: 'https://www.credly.com/badges/d5f01e33-b797-4a6d-8071-a4cfe26ec22c/linked_in_profile' },
    ];

    return (
        <div className="container">
            <h2 className="heading">My Certificates</h2>
            <p className="click-instruction">Click on a certificate to see the credentials.</p>
            <div className="badges">
                {badgesList.map((badge, index) => (
                    <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badge">
                        <img src={badge.img} alt={`Badge ${index + 1}`} className="image" />
                        <div className="title">{badge.title}</div>
                    </a>
                ))}
            </div>
            <a href="path/to/your/credentials.pdf" className="credential-link" target="_blank" rel="noopener noreferrer">
                View Full Credentials
            </a>
        </div>
    );
};

export default Badges;
