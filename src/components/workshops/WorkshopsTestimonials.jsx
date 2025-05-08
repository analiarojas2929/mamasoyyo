import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const WorkshopsTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana García",
      workshop: "Primeros Auxilios para Bebés",
      text: "Un taller excelente y muy práctico. Me siento más segura ahora para manejar emergencias con mi bebé.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Carolina Pérez",
      workshop: "Lactancia Materna",
      text: "La instructora fue muy paciente y profesional. Resolvió todas mis dudas y ahora disfruto mucho más la lactancia.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "María Silva",
      workshop: "Estimulación Temprana",
      text: "Las actividades son muy didácticas y fáciles de implementar en casa. Mi bebé disfruta mucho los ejercicios.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="workshops-testimonials-section">
      <div className="testimonials-container">
        <h2>Lo que dicen nuestras mamás</h2>
        <p className="section-description">
          Experiencias de quienes ya tomaron nuestros talleres
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.workshop}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsTestimonials;