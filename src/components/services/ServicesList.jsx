import React from 'react';
import '../../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserGroup, 
  faCalendarCheck, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';

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
      icon: faUserGroup,
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80"
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
      icon: faCalendarCheck,
      image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&q=80"
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
      icon: faStar,
      image: "https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?auto=format&fit=crop&q=80"
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
              <div className="service-header">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
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