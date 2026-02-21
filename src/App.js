import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Geolocator from './components/Geolocator';
import ImageGallery from './components/ImageGallery';
import ServiceDescription from './components/ServiceDescription';
import './styles/App.css';

function App() {
  return (
    <Router basename="/pavan-batteries">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/geolocator" element={<Geolocator />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/services" element={<ServiceDescription />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;