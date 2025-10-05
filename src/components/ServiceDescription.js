import React from 'react';
import '../styles/ServiceDescription.css';

const ServiceDescription = () => {
  return (
    <div className="service-description">
      <h2>Our Services</h2>
      <p className="services-intro">
        At Pavan Batteries, we provide comprehensive battery solutions for all your needs. 
        Our expert team, led by <strong>Veera Rajendra</strong>, ensures quality service and genuine products.
      </p>

      <p className="brands">
        <strong>We sell batteries from top brands:</strong> Exide (our primary partner), Amaron, Luminous, Powerzone, and other major battery and inverter brands.
      </p>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🚗</div>
          <h3>Vehicle Battery Replacement</h3>
          <p>Complete battery replacement for cars, bikes, autos, lorries, trucks, and vans. We stock batteries from all leading brands like Exide, Amaron, and Tata Green.</p>
          <ul>
            <li>Free battery testing</li>
            <li>Quick installation</li>
            <li>Old battery disposal</li>
            <li>Warranty on all products</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3>Inverter Setup & Installation</h3>
          <p>Professional inverter installation for homes and offices. We provide complete power backup solutions to keep your lights on during power cuts.</p>
          <ul>
            <li>Home inverter installation</li>
            <li>Battery bank setup</li>
            <li>Wiring and connections</li>
            <li>Maintenance services</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🔧</div>
          <h3>Battery Repair & Maintenance</h3>
          <p>Expert repair services to extend your battery life. Our skilled technicians can fix most battery issues and restore performance.</p>
          <ul>
            <li>Battery reconditioning</li>
            <li>Terminal cleaning</li>
            <li>Water level maintenance</li>
            <li>Performance optimization</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🛢️</div>
          <h3>Engine Oil & Accessories</h3>
          <p>We stock premium engine oils and distilled water for battery maintenance. All products are genuine and reasonably priced.</p>
          <ul>
            <li>Engine oil (all grades)</li>
            <li>Distilled water</li>
            <li>Battery terminals</li>
            <li>Charging cables</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🚚</div>
          <h3>Home Delivery & Pickup</h3>
          <p>Convenient home delivery and pickup services for your battery needs. We serve all areas in and around Mandapeta.</p>
          <ul>
            <li>Free home delivery</li>
            <li>Old battery pickup</li>
            <li>Emergency services</li>
            <li>Same-day service</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">💡</div>
          <h3>Free Consultation</h3>
          <p>Get expert advice on choosing the right battery for your vehicle or home. We help you make informed decisions.</p>
          <ul>
            <li>Battery selection guidance</li>
            <li>Power requirement analysis</li>
            <li>Cost estimation</li>
            <li>Maintenance tips</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🔌</div>
          <h3>Battery Charging & Testing</h3>
          <p>Professional battery charging and testing services to ensure optimal performance and longevity of your batteries.</p>
          <ul>
            <li>Free battery testing</li>
            <li>Fast charging service</li>
            <li>Performance diagnostics</li>
            <li>Battery health reports</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🛡️</div>
          <h3>Warranty & Support</h3>
          <p>Comprehensive warranty coverage and ongoing support for all our products and services. Your satisfaction is our priority.</p>
          <ul>
            <li>Extended warranty options</li>
            <li>24/7 customer support</li>
            <li>Free replacement service</li>
            <li>Technical assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;