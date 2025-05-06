import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana García",
      role: "Madre de 2 hijos",
      text: "MamáSoyYo me ayudó a reconectarme conmigo misma y encontrar un espacio para mi crecimiento personal.",
      icon: "👤"
    },
    {
      name: "María López",
      role: "Madre primeriza",
      text: "Los talleres grupales me han dado herramientas invaluables para gestionar mejor mi nueva etapa como madre.",
      icon: "👤"
    },
    {
      name: "Laura Martínez",
      role: "Madre de 3 hijos",
      text: "La comunidad que he encontrado aquí es increíble. Me siento comprendida y apoyada.",
      icon: "👤"
    }
  ];

  return (
    <section className="testimonials">
      <h2>Experiencias que Inspiran</h2>
      <p className="section-subtitle">Lo que dicen nuestras mamás</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-icon">{testimonial.icon}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <span className="testimonial-role">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;