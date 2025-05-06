import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Comienza tu viaje de transformación</h2>
        <p>Únete a nuestra comunidad y descubre un espacio diseñado especialmente para ti</p>
        <div className="cta-buttons">
          <button className="primary-button">Registrarme ahora</button>
          <button className="secondary-button">Conocer más</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;