import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo funcionan las sesiones online?",
      answer: "Las sesiones se realizan a través de una plataforma segura de videollamada. Recibirás un enlace para conectarte en el horario acordado. La duración es de 50 minutos y podrás tener la privacidad que necesitas desde tu hogar."
    },
    {
      question: "¿Cuál es el costo de las sesiones?",
      answer: "Los precios varían según el tipo de servicio. Las sesiones individuales comienzan desde $35.000, y los talleres grupales desde $25.000. Ofrecemos planes mensuales con descuentos especiales."
    },
    {
      question: "¿Qué pasa si necesito cancelar una sesión?",
      answer: "Puedes cancelar o reprogramar tu sesión hasta 24 horas antes sin costo adicional. Para cancelaciones con menos tiempo, se aplicará un cargo del 50% del valor de la sesión."
    },
    {
      question: "¿Las sesiones son confidenciales?",
      answer: "Absolutamente. Mantenemos estrictos estándares de confidencialidad profesional. Tu información y el contenido de las sesiones están protegidos y son completamente privados."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Preguntas Frecuentes</h2>
      <p className="section-subtitle">Todo lo que necesitas saber</p>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;