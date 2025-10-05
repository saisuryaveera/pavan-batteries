import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🔋 Pavan Batteries</h1>
          <p className="tagline">Your Power Partner in Mandapeta</p>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/about">ℹ️ About</Link></li>
            <li><Link to="/services">⚙️ Services</Link></li>
            <li><Link to="/gallery">📸 Gallery</Link></li>
            <li><Link to="/geolocator">📍 Location</Link></li>
            <li><Link to="/contact">📞 Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="contact-bar">
        <div className="contact-info">
          <p>📞 +91 99899 37686</p>
          <p>📞 +91 79899 49809</p>
          <p>🕒 Daily: 9AM-8:30PM</p>
        </div>
      </div>
    </header>
  );
};

export default Header;