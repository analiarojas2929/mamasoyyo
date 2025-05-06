import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Terapia Individual",
      description: "Sesiones personalizadas con psicólogas especializadas en maternidad",
      icon: "🧘‍♀️",
      price: "Desde $5.000/sesión"
    },
    {
      title: "Talleres Grupales",
      description: "Espacios de aprendizaje y conexión con otras madres",
      icon: "👭",
      price: "Desde $2.000/taller"
    },
    {
      title: "Coaching Maternal",
      description: "Acompañamiento en tu desarrollo personal como madre",
      icon: "✨",
      price: "Desde $3.000/sesión"
    },
    {
      title: "Mindfulness",
      description: "Aprende técnicas de atención plena para la maternidad",
      icon: "🌸",
      price: "Desde $2.000/sesión"
    }
  ];

  return (
    <section className="services">
      <h2>Nuestros Servicios</h2>
      <p className="section-subtitle">Descubre el apoyo que necesitas</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-price">{service.price}</span>
            <button className="service-button">Reservar</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;