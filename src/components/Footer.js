import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🔋 Pavan Batteries</h3>
          <p>Your trusted battery partner in Mandapeta, Konaseema District, Andhra Pradesh. Serving the community with quality products and excellent service since 2015.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Vehicle Battery Replacement</li>
            <li>Inverter Setup & Installation</li>
            <li>Battery Repair & Maintenance</li>
            <li>Engine Oil & Accessories</li>
            <li>Home Delivery & Pickup</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-details">
            <p>📞 +91 99899 37686</p>
            <p>📞 +91 79899 49809</p>
            <p>📧 info@pavanbatteries.com</p>
            <p>📍 Near Pedha Kaaluva Bridge<br/>Mandapeta Entrance Gate<br/>Mandapeta-Ramachandrapuram Road<br/>Konaseema District, Andhra Pradesh - 533308</p>
            <p>🕒 Daily: 9AM-8:30PM</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Pavan Batteries. All rights reserved.</p>
          <div className="social-media">
            <a href="https://facebook.com/veera.rajendra" target="_blank" rel="noopener noreferrer">
              📘 Facebook
            </a>
            <a href="https://www.justdial.com/Andhra-Pradesh/Mandapeta" target="_blank" rel="noopener noreferrer">
              📞 JustDial
            </a>
            <a href="https://wa.me/919989937686" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;