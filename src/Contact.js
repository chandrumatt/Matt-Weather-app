import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <img src="/images/logo.png" alt="Contact" className="contact-image" />
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: matt@mattengg.com</p>
          <p>Phone: 7305197833</p>
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />
            <textarea
              placeholder="Your Message"
              className="contact-input"
              rows="4"
            ></textarea>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
