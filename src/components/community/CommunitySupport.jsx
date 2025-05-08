import React from 'react';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaClock, 
  FaComments,
  FaArrowRight 
} from 'react-icons/fa';

const CommunitySupport = () => {
  const supportChannels = [
    {
      id: 1,
      title: "Chat en Vivo",
      description: "Conecta directamente con nuestro equipo",
      icon: <FaComments />,
      buttonText: "Iniciar Chat",
      buttonLink: "/chat",
      available: true
    },
    {
      id: 2,
      title: "WhatsApp",
      description: "Escríbenos por WhatsApp",
      icon: <FaWhatsapp />,
      buttonText: "Enviar Mensaje",
      buttonLink: "https://wa.me/1234567890",
      available: true
    },
    {
      id: 3,
      title: "Correo",
      description: "soporte@mamasoyyo.com",
      icon: <FaEnvelope />,
      buttonText: "Enviar Email",
      buttonLink: "mailto:soporte@mamasoyyo.com",
      available: true
    }
  ];

  return (
    <section className="community-support">
      <div className="support-container">
        <h2>¿Necesitas Ayuda?</h2>
        <p className="section-description">
          Estamos aquí para apoyarte en cualquier momento
        </p>

        <div className="support-content">
          <div className="support-grid">
            {supportChannels.map(channel => (
              <div key={channel.id} className="support-card">
                <div className="support-icon">{channel.icon}</div>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <a 
                  href={channel.buttonLink} 
                  className="support-button"
                  target={channel.buttonLink.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  {channel.buttonText} <FaArrowRight />
                </a>
                {channel.available && (
                  <span className="availability-badge">
                    Disponible ahora
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="hours-section">
            <div className="hours-content">
              <FaClock className="hours-icon" />
              <h3>Horario de Atención</h3>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Lunes a Viernes</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sábados</span>
                  <span className="time">10:00 AM - 2:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Domingos</span>
                  <span className="time">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;