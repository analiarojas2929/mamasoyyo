import React from 'react';
import { FaCalendarAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../../styles/Services.css';

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-content">
          <div className="booking-text">
            <h2>Agenda tu Primera Sesión</h2>
            <p>Estamos aquí para acompañarte en tu camino maternal</p>
            <div className="booking-contact">
              <div className="contact-item">
                <FaPhone />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>contacto@mamasoyyo.cl</span>
              </div>
            </div>
          </div>
          <form className="booking-form">
            <div className="form-row">
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Teléfono" required />
              <select required>
                <option value="">Tipo de servicio</option>
                <option value="individual">Asesoría Individual</option>
                <option value="taller">Taller Grupal</option>
                <option value="programa">Programa Integral</option>
              </select>
            </div>
            <div className="form-row">
              <textarea placeholder="Mensaje (opcional)" rows="4"></textarea>
            </div>
            <button type="submit" className="booking-button">
              <FaCalendarAlt />
              Agendar Cita
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;