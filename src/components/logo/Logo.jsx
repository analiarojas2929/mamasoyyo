import React from 'react';
import logo from '../../assets/img/logo.png';  // Importa la imagen
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="MamáSoyYo" className="logo-image" />
    </div>
  );
};

export default Logo;