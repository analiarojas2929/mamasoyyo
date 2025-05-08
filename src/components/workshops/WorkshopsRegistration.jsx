import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCalendar } from 'react-icons/fa';

const WorkshopsRegistration = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    taller: '',
    fecha: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <section className="workshops-registration-section">
      <div className="registration-container">
        <h2>Inscríbete a Nuestros Talleres</h2>
        <p className="section-description">
          Da el primer paso en tu camino maternal
        </p>

        <div className="registration-content">
          <div className="registration-info">
            <h3>¿Por qué inscribirte?</h3>
            <ul className="benefits-list">
              <li>
                <span className="benefit-icon">✨</span>
                <div>
                  <strong>Experiencia Personalizada</strong>
                  <p>Grupos reducidos para atención individual</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">📚</span>
                <div>
                  <strong>Material Exclusivo</strong>
                  <p>Recursos digitales y guías prácticas</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">👥</span>
                <div>
                  <strong>Comunidad de Apoyo</strong>
                  <p>Conecta con otras madres en tu camino</p>
                </div>
              </li>
            </ul>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select
                  name="taller"
                  value={formData.taller}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un taller</option>
                  <option value="primeros-auxilios">Primeros Auxilios</option>
                  <option value="lactancia">Lactancia Materna</option>
                  <option value="estimulacion">Estimulación Temprana</option>
                </select>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <FaCalendar className="input-icon" />
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="mensaje"
                placeholder="¿Alguna pregunta o comentario?"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane /> Enviar Inscripción
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsRegistration;