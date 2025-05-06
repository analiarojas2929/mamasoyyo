import React from 'react';
import './Experts.css';

const Experts = () => {
  const experts = [
    {
      name: "Dra. Carolina López",
      role: "Psicóloga Perinatal",
      description: "Especialista en apoyo emocional durante el embarazo y postparto",
      image: require("../../assets/img/experts/expert1.jpg")
    },
    {
      name: "Marco Fernández",
      role: "Coach Maternal",
      description: "Experto en desarrollo personal y transición a la maternidad",
      image: require("../../assets/img/experts/expert2.jpg")
    },
    {
      name: "Ana Silva",
      role: "Terapeuta Familiar",
      description: "Especializada en vínculos madre-hijo y relaciones familiares",
      image: require("../../assets/img/experts/expert3.jpg")
    }
  ];

  return (
    <section className="experts">
      <h2>Nuestras Expertas</h2>
      <p className="section-subtitle">Conoce a quienes te acompañarán en este viaje</p>
      <div className="experts-grid">
        {experts.map((expert, index) => (
          <div key={index} className="expert-card">
            <div className="expert-image">
              <img src={expert.image} alt={expert.name} />
            </div>
            <h3>{expert.name}</h3>
            <span className="expert-role">{expert.role}</span>
            <p>{expert.description}</p>
            <button className="expert-button">Conoce más</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;