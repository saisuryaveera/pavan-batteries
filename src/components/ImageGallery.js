import React from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  const images = [
  { src: `${process.env.PUBLIC_URL}/images/20251004_152327.jpg`, alt: 'Pavan Batteries Shop Exterior View' },
  { src: `${process.env.PUBLIC_URL}/images/20251004_152400.jpg`, alt: 'Battery Display and Products' },
  { src: `${process.env.PUBLIC_URL}/images/20251004_152446(1).jpg`, alt: 'Professional Battery Testing Area' },
  { src: `${process.env.PUBLIC_URL}/images/20251004_152529.jpg`, alt: 'Inverter and Home Battery Setup' },
  { src: `${process.env.PUBLIC_URL}/images/20251004_152712.jpg`, alt: 'Vehicle Battery Replacement Service' },
  { src: `${process.env.PUBLIC_URL}/images/20251004_152737.jpg`, alt: 'Battery Repair and Maintenance Workshop' },
  { src: `${process.env.PUBLIC_URL}/images/20251004_152825.jpg`, alt: 'Engine Oil and Accessories Section' },
  { src: `${process.env.PUBLIC_URL}/images/20251004_153658.jpg`, alt: 'Customer Service and Consultation Area' },
];

  return (
    <div className="image-gallery">
      <h2>Our Shop Gallery</h2>
      <p>Take a virtual tour of Pavan Batteries - your trusted battery partner in Mandapeta. Explore our modern facilities, professional service areas, and quality products.</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" data-alt={image.alt}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;