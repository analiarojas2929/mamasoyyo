import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <Logo />
            <h3>MamáSoyYo</h3>
          </div>
          <p>Un espacio seguro para madres que buscan balance, apoyo y crecimiento personal.</p>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/talleres">Talleres</Link></li>
            <li><Link to="/comunidad">Comunidad</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>Email: mamasoyyovregion@gmail.com</li>
            <li>Teléfono: +34 123 456 789</li>
            <li>WhatsApp: +34 123 456 789</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MamáSoyYo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;