import React from "react";
import "../components/Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Nike</h1>
      <p>We're here to help — reach out to us through any of the channels below.</p>

      <div className="contact-grid">
        <div className="contact-item">
          <h3>Customer Support</h3>
          <p>📞 +1-800-806-6453</p>
          <p>📧 support@nike.com</p>
          <p>🕓 Mon – Fri: 8 AM – 8 PM (EST)</p>
        </div>

        <div className="contact-item">
          <h3>Corporate Office</h3>
          <p>Nike, Inc.</p>
          <p>One Bowerman Drive</p>
          <p>Beaverton, OR 97005, USA</p>
        </div>

        <div className="contact-item">
          <h3>Follow Us</h3>
          <p>🌐 <a href="https://www.instagram.com/nike" target="_blank" rel="noreferrer">Instagram</a></p>
          <p>🌐 <a href="https://twitter.com/Nike" target="_blank" rel="noreferrer">Twitter</a></p>
          <p>🌐 <a href="https://www.facebook.com/nike" target="_blank" rel="noreferrer">Facebook</a></p>
          <p>🌐 <a href="https://www.youtube.com/user/nike" target="_blank" rel="noreferrer">YouTube</a></p>
        </div>

        <div className="contact-item">
          <h3>Feedback & Inquiries</h3>
          <p>Have a suggestion or a business proposal?</p>
          <p>📧 business@nike.com</p>
        </div>
      </div>

      <div className="map-section">
        <h3>Find Us</h3>
        <iframe 
          title="Nike HQ Map"
          src="https://maps.google.com/maps?q=Nike%20HQ%20Beaverton&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="300" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
