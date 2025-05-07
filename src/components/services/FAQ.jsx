import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../../styles/Services.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo son las sesiones individuales?",
      answer: "Las sesiones son personalizadas y tienen una duración de 60 minutos. Se realizan en un ambiente seguro y confidencial, donde podrás expresar tus inquietudes libremente."
    },
    {
      question: "¿Los talleres son presenciales o virtuales?",
      answer: "Ofrecemos ambas modalidades. Puedes elegir la que mejor se adapte a tus necesidades y disponibilidad. Los talleres virtuales tienen la misma calidad y atención que los presenciales."
    },
    {
      question: "¿Cuánto duran los programas?",
      answer: "La duración varía según el programa elegido. Tenemos programas desde 4 semanas hasta 3 meses, diseñados para acompañarte en diferentes etapas de tu maternidad."
    },
    {
      question: "¿Puedo cancelar o reprogramar una cita?",
      answer: "Sí, puedes reprogramar tu cita con 24 horas de anticipación sin costo adicional. Para cancelaciones, consulta nuestra política de cancelación."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Preguntas Frecuentes</h2>
          <p>Resolvemos tus dudas sobre nuestros servicios</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <FaChevronDown className="faq-icon" />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;