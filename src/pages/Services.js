import React from "react";
import "../components/Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>At Nike, we go beyond products — we deliver performance, innovation, and support for athletes and fans worldwide.</p>

      <ul className="service-list">
        <li>
          <h3>👟 Premium Footwear & Apparel</h3>
          <p>Top-tier athletic gear for running, training, basketball, and lifestyle wear.</p>
        </li>
        <li>
          <h3>🛠️ Nike By You (Customization)</h3>
          <p>Design your own shoes with colors, materials, and personal IDs.</p>
        </li>
        <li>
          <h3>📱 Online Shopping Experience</h3>
          <p>Secure, fast, and user-friendly online store with exclusive releases.</p>
        </li>
        <li>
          <h3>🚚 Delivery & Easy Returns</h3>
          <p>Fast shipping with 30-day return policy — no questions asked.</p>
        </li>
        <li>
          <h3>🌟 Nike Membership Benefits</h3>
          <p>Early product access, member-only deals, and personalized training content.</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
