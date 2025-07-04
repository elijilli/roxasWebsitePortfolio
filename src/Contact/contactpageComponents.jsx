// Contact.jsx
import React from 'react';
import './contactpage.scss';

const ContactPageComponent = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/irishroxas', '_blank');
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-card">
        <div className="contact-content">
          <div className="contact-intro">
            <p className="intro-text">
              If you're interested, keep in touch here!
            </p>
          </div>
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <a href="mailto:irish@example.com" className="detail-value">
                irishroxas0925@gmail.com
              </a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <a href="tel:+1234567890" className="detail-value">
                +63 905 485 8821
              </a>
            </div>
          </div>
          <div className="contact-action">
            <button 
              className="contact-button"
              onClick={openLinkedIn}
            >
              Get in touch! 🤍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComponent;