import React from 'react';
import '../styles/Geolocator.css';

const Geolocator = () => {
  return (
    <div className="geolocator-container">
      <h3>Find Pavan Batteries on Map</h3>
      <p className="location-info">
        📍 Near Pedha Kaaluva Bridge, Mandapeta Entrance Gate, Mandapeta-Ramachandrapuram Road, Konaseema District, Andhra Pradesh - 533308
      </p>
      <div className="map-placeholder">
        <div className="map-content">
          <div className="map-icon">🗺️</div>
          <h4>Interactive Map</h4>
          <p>Click the button below to open our location in Google Maps for detailed directions and navigation.</p>
          <p><strong>Store Location:</strong> 16.8444°N, 82.2022°E</p>
          <a 
            href="https://maps.app.goo.gl/RHua23yrxDf92bDy6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
      <div className="directions">
        <h4>How to Reach Us:</h4>
        <ul>
          <li>🚌 Take any bus to Mandapeta or travel via Mandapeta-Ramachandrapuram Road</li>
          <li>🌉 Look for Pedha Kaaluva Bridge near Mandapeta entrance gate</li>
          <li>👀 Look for our bright yellow "Pavan Batteries" signboard</li>
          <li>🅿️ Free parking available in front of the shop</li>
        </ul>
      </div>
    </div>
  );
};

export default Geolocator;