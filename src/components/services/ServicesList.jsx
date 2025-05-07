import React from 'react';
import '../../styles/Services.css';

const ServicesList = () => {
  const services = [
    {
      id: 1,
      title: "Asesoría Personalizada",
      description: "Sesiones individuales adaptadas a tus necesidades específicas como madre.",
      price: "Desde $45.000",
      duration: "60 minutos",
      included: [
        "Evaluación inicial detallada",
        "Plan personalizado",
        "Seguimiento continuo",
        "Material de apoyo"
      ],
      image: "/images/personal-coaching.jpg"
    },
    {
      id: 2,
      title: "Talleres Grupales",
      description: "Aprende y comparte experiencias en un ambiente seguro y acogedor.",
      price: "Desde $35.000",
      duration: "90 minutos",
      included: [
        "Grupos reducidos",
        "Material didáctico",
        "Ejercicios prácticos",
        "Certificado de participación"
      ],
      image: "/images/group-workshop.jpg"
    },
    {
      id: 3,
      title: "Programa Integral",
      description: "Un acompañamiento completo en tu journey maternal.",
      price: "Desde $150.000",
      duration: "3 meses",
      included: [
        "Sesiones semanales",
        "Acceso a recursos exclusivos",
        "Comunidad privada",
        "Soporte prioritario"
      ],
      image: "/images/integral-program.jpg"
    }
  ];

  return (
    <section className="services-list-section">
      <div className="services-container">
        <h2>Nuestros Servicios</h2>
        <p className="section-description">
          Diseñados pensando en tus necesidades y las de tu familia
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <span className="price">{service.price}</span>
                  <span className="duration">{service.duration}</span>
                </div>
                <ul className="service-included">
                  {service.included.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button className="book-button">Reservar Ahora</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;