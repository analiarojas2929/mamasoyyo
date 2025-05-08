import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const WorkshopsFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo son los talleres virtuales?",
      answer: "Los talleres virtuales se realizan a través de Zoom. Son interactivos y participativos, con material digital, ejercicios prácticos y seguimiento personalizado. Recibirás el enlace y las instrucciones 24 horas antes."
    },
    {
      question: "¿Qué incluye la inscripción?",
      answer: "La inscripción incluye acceso al taller, material didáctico digital, certificado de participación, acceso a nuestra comunidad privada y seguimiento post-taller durante un mes."
    },
    {
      question: "¿Puedo cancelar mi inscripción?",
      answer: "Sí, puedes cancelar hasta 48 horas antes del taller con reembolso del 80%. Para cancelaciones posteriores, podrás transferir tu cupo a otro taller o a otra persona."
    },
    {
      question: "¿Hay cupos mínimos para realizar el taller?",
      answer: "Sí, necesitamos un mínimo de 5 participantes para realizar el taller. En caso de no alcanzar el mínimo, te ofreceremos otras fechas disponibles o el reembolso completo."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="workshops-faq-section">
      <div className="faq-container">
        <h2>Preguntas Frecuentes</h2>
        <p className="section-description">
          Todo lo que necesitas saber sobre nuestros talleres
        </p>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
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

        <div className="faq-contact">
          <p>¿No encontraste lo que buscabas?</p>
          <button className="contact-button">Contáctanos</button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsFAQ;