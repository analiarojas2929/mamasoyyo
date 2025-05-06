import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const reasons = [
    {
      title: "Experiencia Especializada",
      description: "Nuestras profesionales están certificadas y especializadas en maternidad",
      icon: "📚"
    },
    {
      title: "Atención Personalizada",
      description: "Cada madre recibe un plan adaptado a sus necesidades específicas",
      icon: "🎯"
    },
    {
      title: "Flexibilidad Horaria",
      description: "Sesiones que se adaptan a tu rutina y disponibilidad",
      icon: "⏰"
    },
    {
      title: "Comunidad Activa",
      description: "Conéctate con otras madres que comparten experiencias similares",
      icon: "👥"
    }
  ];

  return (
    <section className="why-us">
      <h2>¿Por Qué Elegirnos?</h2>
      <p className="section-subtitle">Lo que nos hace diferentes</p>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <span className="reason-icon">{reason.icon}</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;