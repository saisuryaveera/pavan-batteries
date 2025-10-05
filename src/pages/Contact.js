import React from 'react';
import Geolocator from '../components/Geolocator';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Pavan Batteries</h1>
        <p className="contact-intro">
          Need a new battery or repair service? We're here to help! Contact us for the best 
          battery solutions in Mandapeta, Konaseema district.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            
            <div className="contact-item">
              <h3>📞 Phone Numbers</h3>
              <p><strong>Primary:</strong> +91 99899 37686</p>
              <p><strong>Secondary:</strong> +91 79899 49809</p>
              <p><strong>WhatsApp:</strong> +91 99899 37686</p>
            </div>

            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>info@pavanbatteries.com</p>
              <p>support@pavanbatteries.com</p>
            </div>

            <div className="contact-item">
              <h3>📍 Visit Our Shop</h3>
              <p><strong>Address:</strong></p>
              <p>Pavan Batteries<br/>
              Near Pedha Kaaluva Bridge<br/>
              Mandapeta Entrance Gate<br/>
              Mandapeta-Ramachandrapuram Road<br/>
              Konaseema District, Andhra Pradesh - 533308</p>
            </div>

            <div className="contact-item">
              <h3>🕒 Business Hours</h3>
              <p><strong>Daily:</strong> 9:00 AM - 8:30 PM</p>
              <p><strong>Emergency Service:</strong> Available 24/7</p>
            </div>

            <div className="contact-item">
              <h3>🚚 Services Available</h3>
              <ul>
                <li>Home delivery and pickup</li>
                <li>Emergency battery replacement</li>
                <li>Free battery testing</li>
                <li>Installation and setup</li>
                <li>Repair and maintenance</li>
              </ul>
            </div>

            <div className="contact-item">
              <h3>📱 Follow Us</h3>
              <div className="social-links">
                <a href="https://facebook.com/veera.rajendra" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://www.justdial.com/Andhra-Pradesh/Mandapeta" target="_blank" rel="noopener noreferrer">
                  JustDial
                </a>
                <a href="https://wa.me/919989937686" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Find Us on Map</h2>
            <Geolocator />
            <div className="map-info">
              <p>
                <strong>Directions:</strong> We are located near Pedha Kaaluva Bridge at the Mandapeta entrance gate on Mandapeta-Ramachandrapuram Road. 
                Look for our bright yellow signboard with "Pavan Batteries" written in Telugu and English.
              </p>
              <p>
                <strong>Parking:</strong> Free parking available in front of the shop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;