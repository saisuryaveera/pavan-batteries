import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/home" className="logo" onClick={toggleMenu}>
            <h1>🔋 Pavan Batteries</h1>
            <p className="tagline">Your Power Partner in Mandapeta</p>
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/services" onClick={toggleMenu}>⚙️ Services</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>📸 Gallery</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>ℹ️ About</Link></li>
            <li><Link to="/geolocator" onClick={toggleMenu}>📍 Location</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>📞 Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;