import React, { useState } from 'react';
import './AuthForms.css';
import { 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaArrowRight, 
  FaGoogle, 
  FaFacebook 
} from 'react-icons/fa';

export const LoginForm = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showRecoverPassword, setShowRecoverPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de login
  };

  if (showRecoverPassword) {
    return <RecoverPasswordForm onBack={() => setShowRecoverPassword(false)} />;
  }

  return (
    <div className="auth-form">
      <h2>¡Bienvenida de nuevo!</h2>
      <p className="welcome-text">
        Nos alegra verte otra vez.
      </p>
      <div className="social-login">
        <button className="social-button google">
          <FaGoogle />
          <span>Continuar con Google</span>
        </button>
        <button className="social-button facebook">
          <FaFacebook />
          <span>Continuar con Facebook</span>
        </button>
      </div>
      <div className="divider">
        <span>O ingresa con tu correo</span>
      </div>
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
      <button 
        type="button" 
        className="forgot-password"
        onClick={() => setShowRecoverPassword(true)}
      >
        ¿Olvidaste tu contraseña?
      </button>
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

export const RecoverPasswordForm = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de recuperación
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="auth-form">
        <h2>¡Revisa tu correo!</h2>
        <p className="welcome-text">
          Hemos enviado las instrucciones para recuperar tu contraseña a:
          <br />
          <strong>{email}</strong>
        </p>
        <button className="auth-button" onClick={onBack}>
          Volver al inicio de sesión
          <FaArrowRight className="button-icon" />
        </button>
      </div>
    );
  }

  return (
    <div className="auth-form">
      <h2>Recuperar contraseña</h2>
      <p className="welcome-text">
        Ingresa tu correo electrónico y te enviaremos las instrucciones.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-icon-wrapper">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="auth-button">
          Enviar instrucciones
          <FaArrowRight className="button-icon" />
        </button>
      </form>
      <button className="back-button" onClick={onBack}>
        Volver al inicio de sesión
      </button>
    </div>
  );
};