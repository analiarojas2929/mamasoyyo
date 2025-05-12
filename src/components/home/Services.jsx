import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Terapia Psicológica",
      description: "Acompañamiento profesional adaptado a tus necesidades, individual o grupal",
      icon: "🧘‍♀️",
      price: "Desde $10.000",
      period: "por sesión",
      features: [
        "Sesiones individuales o grupales",
        "Atención personalizada",
        "Modalidad online o presencial",
        "Grupos reducidos y material de apoyo",
        "Horarios flexibles"
      ],
      options: [
        { type: "Individual", price: "$3.000" },
        { type: "Grupal", price: "$5.000" }
      ]
    },
    {
      title: "Coaching Maternal",
      description: "Potencia tu desarrollo personal en esta nueva etapa de vida",
      icon: "✨",
      price: "Desde $8.000",
      period: "por sesión",
      features: [
        "Plan personalizado",
        "Seguimiento continuo",
        "Herramientas prácticas",
        "Apoyo entre sesiones",
        "Comunidad activa"
      ]
    },
    {
      title: "Mindfulness Maternal",
      description: "Encuentra equilibrio y consciencia en tu maternidad",
      icon: "🌸",
      price: "Desde $10.000",
      period: "por sesión",
      features: [
        "Técnicas de respiración",
        "Meditaciones guiadas",
        "Prácticas diarias",
        "Material audiovisual",
        "Ejercicios de conexión"
      ]
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h2>Nuestros Servicios</h2>
        <p className="section-subtitle">Descubre el apoyo que necesitas en tu camino maternal</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-header">
              <div className="home-service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
            </div>
            <div className="service-pricing">
              <span className="service-price">{service.price}</span>
              <span className="service-period">{service.period}</span>
              {service.options && (
                <div className="service-options">
                  {service.options.map((option, i) => (
                    <div key={i} className="option">
                      <span className="option-type">{option.type}</span>
                      <span className="option-price">{option.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="service-button">Agendar Ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;