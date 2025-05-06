import React from 'react';
import heroImage from '../../assets/img/hero-mother.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Reconéctate contigo misma</h1>
        <p className="hero-subtitle">Un espacio seguro para madres que buscan balance, apoyo y crecimiento personal</p>
        <div className="hero-buttons">
          <button className="cta-button primary">Comienza tu viaje</button>
          <button className="cta-button secondary">Conoce más</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Madre sonriente con su bebé" />
      </div>
    </section>
  );
};

export default Hero;