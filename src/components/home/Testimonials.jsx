import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana García",
      role: "Madre de 2 hijos",
      text: "MamáSoyYo me ayudó a reconectarme conmigo misma y encontrar un espacio para mi crecimiento personal.",
      image: "/path-to-image1.jpg"
    },
    {
      name: "María López",
      role: "Madre primeriza",
      text: "Los talleres grupales me han dado herramientas invaluables para gestionar mejor mi nueva etapa como madre.",
      image: "/path-to-image2.jpg"
    },
    {
      name: "Laura Martínez",
      role: "Madre de 3 hijos",
      text: "La comunidad que he encontrado aquí es increíble. Me siento comprendida y apoyada.",
      image: "/path-to-image3.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <h2>Experiencias que Inspiran</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
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