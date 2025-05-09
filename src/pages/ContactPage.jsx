import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario a un backend
    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Gracias por contactarnos! Te responderemos pronto.'
    });
    
    // Limpia el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Estamos para ayudarte</h1>
          <p>¿Tienes dudas o necesitas más información? Contáctanos y te responderemos a la brevedad.</p>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <p>Estamos comprometidas con apoyarte en tu camino de maternidad. No dudes en contactarnos.</p>
            
            <div className="info-items">
              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <h3>Ubicación</h3>
                  <p>Av. Libertador 1234, Santiago de Chile</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaPhoneAlt />
                <div>
                  <h3>Teléfono</h3>
                  <p>+56 9 1234 5678</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>contacto@mamasoyyo.cl</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaClock />
                <div>
                  <h3>Horario de Atención</h3>
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábado: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://instagram.com" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" className="social-link">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://wa.me/56912345678" className="social-link">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Envíanos un mensaje</h2>
            
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu correo"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ingresa tu teléfono"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Asunto del mensaje"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  rows="6"
                />
              </div>
              
              <button type="submit" className="submit-button">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <h2>Encuéntranos aquí</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13316.204567082367!2d-70.64987723022462!3d-33.43747509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sCentro%20de%20Santiago%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1651889611568!5m2!1ses!2scl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de MamáSoyYo"
          ></iframe>
        </div>
      </section>
      
      <section className="contact-faq">
        <div className="contact-container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Cómo puedo reservar un taller?</h3>
              <p>Puedes reservar a través de nuestra página de talleres o contactándonos directamente por teléfono o email.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Ofrecen sesiones individuales?</h3>
              <p>Sí, contamos con servicios personalizados para madres que prefieren una atención más individual.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Cuál es la política de cancelación?</h3>
              <p>Las cancelaciones con 48 horas de anticipación tienen reembolso completo. Menos tiempo puede aplicar un cargo.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Tienen programas online?</h3>
              <p>Sí, ofrecemos talleres y asesorías online para quienes no pueden asistir presencialmente.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;