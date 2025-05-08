import React from 'react';
import { FaHeart, FaUsers, FaComments } from 'react-icons/fa';

const CommunityHero = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: "1,200+",
      label: "Miembros activos"
    },
    {
      icon: <FaComments />,
      number: "5,000+",
      label: "Conversaciones"
    },
    {
      icon: <FaHeart />,
      number: "98%",
      label: "Satisfacción"
    }
  ];

  return (
    <section className="community-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Nuestra Comunidad</h1>
        <p className="hero-description">
          Un espacio seguro donde las madres comparten experiencias, 
          aprenden juntas y se apoyan mutuamente en su camino maternal
        </p>
        
        <div className="hero-cta">
          <button className="primary-button">Unirme Ahora</button>
          <button className="secondary-button">Conocer Más</button>
        </div>

        <div className="community-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;