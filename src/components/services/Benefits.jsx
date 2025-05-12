import React from 'react';
import '../../styles/Services.css';
import { FaHeart, FaUsers, FaClock, FaGraduationCap } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaHeart />,
      title: "Atención Personalizada",
      description: "Cada mamá es única, por eso adaptamos nuestro apoyo a tus necesidades específicas."
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Comunidad de Apoyo",
      description: "Conecta con otras madres que comparten experiencias similares a las tuyas."
    },
    {
      id: 3,
      icon: <FaClock />,
      title: "Horarios Flexibles",
      description: "Adaptamos nuestros servicios a tu rutina y disponibilidad."
    },
    {
      id: 4,
      icon: <FaGraduationCap />,
      title: "Profesionales Expertos",
      description: "Equipo especializado con años de experiencia en acompañamiento maternal."
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2>¿Por qué elegirnos?</h2>
          <p>Descubre los beneficios de ser parte de nuestra comunidad</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefits-icon">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;