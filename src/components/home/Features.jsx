import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Sesiones Personalizadas",
      description: "Conecta con profesionales especializadas en acompañamiento maternal",
      icon: "🤝"
    },
    {
      title: "Talleres Grupales",
      description: "Aprende y comparte experiencias en un ambiente seguro y contenido",
      icon: "👥"
    },
    {
      title: "Recursos de Bienestar",
      description: "Accede a contenido exclusivo sobre autocuidado y desarrollo personal",
      icon: "✨"
    },
    {
      title: "Comunidad de Apoyo",
      description: "Únete a una red de madres que se apoyan mutuamente",
      icon: "💝"
    }
  ];

  return (
    <section className="features">
      <h2>¿Qué encontrarás en MamáSoyYo?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;