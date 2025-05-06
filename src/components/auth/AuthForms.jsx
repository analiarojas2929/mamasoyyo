import React, { useState } from 'react';
import './AuthForms.css';
import { FaEnvelope, FaLock, FaUser, FaArrowRight } from 'react-icons/fa';

export const LoginForm = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de login
  };

  return (
    <div className="auth-form">
      <h2>¡Bienvenida de nuevo!</h2>
      <p className="welcome-text">
        Nos alegra verte otra vez.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-icon-wrapper">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
        </div>
        <button type="submit" className="auth-button">
          Iniciar Sesión
          <FaArrowRight className="button-icon" />
        </button>
      </form>
      <div className="switch-form-container">
        <span className="switch-form-text">¿Primera vez en MamáSoyYo?</span>
        <button className="switch-button" onClick={onSwitchToRegister}>
          Crear cuenta
          <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export const RegisterForm = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de registro
  };

  return (
    <div className="auth-form">
      <h2>¡Únete a MamáSoyYo!</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-row">
          <div className="form-group">
            <div className="input-icon-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <div className="input-icon-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="auth-button">
          Crear cuenta
          <FaArrowRight className="button-icon" />
        </button>
      </form>
      <div className="switch-form-container">
        <span className="switch-form-text">¿Ya tienes cuenta?</span>
        <button className="switch-button" onClick={onSwitchToLogin}>
          Iniciar sesión
          <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};