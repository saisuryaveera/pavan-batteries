import React from 'react';
import ServiceDescription from '../components/ServiceDescription';
import ImageGallery from '../components/ImageGallery';
import Geolocator from '../components/Geolocator';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Pavan Batteries</h1>
          <p className="hero-subtitle">Your Trusted Battery Partner in Mandapeta, Konaseema District</p>
          <p className="hero-description">
            Serving the community with premium quality batteries for cars, bikes, autos, lorries, trucks, vans, 
            and home inverters. We also provide distilled water, and professional battery health check service.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🔋</span>
              <span>All Vehicle Batteries</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>Inverter Setup</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔧</span>
              <span>Repair Services</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💧</span>
              <span>Distilled Water</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔌</span>
              <span>Battery Recharge</span>
            </div>
          </div>
        </div>
      </section>
      
      <ServiceDescription />
      <ImageGallery />
      <Geolocator />
    </div>
  );
};

export default Home;