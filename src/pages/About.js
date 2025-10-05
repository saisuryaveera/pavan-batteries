import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Pavan Batteries</h1>
        
        <section className="about-intro">
          <h2>Your Trusted Battery Partner Since 2015</h2>
          <p>
            Welcome to Pavan Batteries, Mandapeta's premier destination for all your battery needs! 
            Owned and operated by <strong>Veera Rajendra</strong>, we are located in the heart of Konaseema district, 
            Andhra Pradesh, and have been serving our community with dedication and excellence for over 8 years.
          </p>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing high-quality batteries and power solutions for every vehicle 
            and home. From cars and bikes to heavy vehicles like lorries and trucks, we ensure reliable 
            power that keeps you moving. Our mission is to be your one-stop solution for all battery-related needs.
          </p>
        </section>

        <section className="about-services">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Vehicle Batteries</h3>
              <p>Car, bike, auto, lorry, truck, and van batteries from top brands</p>
            </div>
            <div className="service-item">
              <h3>Home Solutions</h3>
              <p>Inverter batteries and complete home power backup systems</p>
            </div>
            <div className="service-item">
              <h3>Repair & Maintenance</h3>
              <p>Expert repair services to extend battery life and performance</p>
            </div>
            <div className="service-item">
              <h3>Accessories</h3>
              <p>Engine oil, distilled water, and all battery-related accessories</p>
            </div>
          </div>
        </section>

        <section className="about-brands">
          <h2>Our Trusted Brands</h2>
          <p>We are authorized dealers for leading battery and inverter brands, ensuring you get genuine products with full warranty coverage.</p>
          <div className="brands-grid">
            <div className="brand-item primary">
              <h3>🔴 Exide</h3>
              <p>Our primary partner - India's most trusted battery brand</p>
            </div>
            <div className="brand-item">
              <h3>🟡 Amaron</h3>
              <p>Premium batteries with superior performance</p>
            </div>
            <div className="brand-item">
              <h3>🔵 Luminous</h3>
              <p>Leading inverter and battery solutions</p>
            </div>
            <div className="brand-item">
              <h3>🟢 Powerzone</h3>
              <p>Reliable power backup solutions</p>
            </div>
          </div>
        </section>

        <section className="about-location">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ 8+ years of trusted service in Mandapeta</li>
            <li>✅ Genuine products from leading manufacturers</li>
            <li>✅ Expert installation and setup services</li>
            <li>✅ Competitive prices and honest advice</li>
            <li>✅ Quick and reliable repair services</li>
            <li>✅ Home delivery and pickup services</li>
          </ul>
        </section>

        <section className="about-community">
          <h2>Community Commitment</h2>
          <p>
            As a local business, we understand the unique needs of our community in Mandapeta and 
            surrounding areas. We take pride in supporting local families and businesses with reliable 
            power solutions that keep them connected and productive.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;