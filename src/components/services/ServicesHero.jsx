import React from 'react';
import '../../styles/Services.css';

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Nuestros Servicios</h1>
          <p>Descubre el apoyo personalizado que necesitas en tu camino maternal</p>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-number" data-count="500">+500</span>
            <span className="feature-text">Madres apoyadas</span>
          </div>
          <div className="feature">
            <span className="feature-number" data-count="4.9">4.9/5</span>
            <span className="feature-text">Valoración</span>
          </div>
          <div className="feature">
            <span className="feature-number" data-count="5">5</span>
            <span className="feature-text">Años de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;