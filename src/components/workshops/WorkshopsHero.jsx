import React from 'react';
import '../../styles/Workshops.css';

const WorkshopsHero = () => {
  return (
    <section className="workshops-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Nuestros Talleres</h1>
          <p>Aprende, comparte y crece junto a otras madres en un espacio seguro y acogedor</p>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-number">12+</span>
            <span className="feature-text">Talleres mensuales</span>
          </div>
          <div className="feature">
            <span className="feature-number">98%</span>
            <span className="feature-text">Satisfacción</span>
          </div>
          <div className="feature">
            <span className="feature-number">300+</span>
            <span className="feature-text">Participantes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsHero;