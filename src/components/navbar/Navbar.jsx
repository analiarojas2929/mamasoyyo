import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../logo/Logo';
import Modal from '../modal/Modal';
import { LoginForm, RegisterForm } from '../auth/AuthForms';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login')

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const toggleAuthModal = () => {
    setShowAuthModal(!showAuthModal)
  }

  const switchAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login')
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" onClick={handleLinkClick}>
            <Logo />
            <h1>MamáSoyYo</h1>
          </Link>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Inicio</Link>
          <Link to="/servicios" className="nav-link" onClick={handleLinkClick}>Servicios</Link>
          <Link to="/talleres" className="nav-link" onClick={handleLinkClick}>Talleres</Link>
          <Link to="/comunidad" className="nav-link" onClick={handleLinkClick}>Comunidad</Link>
          <Link to="/contacto" className="nav-link" onClick={handleLinkClick}>Contacto</Link>
          <button className="nav-button" onClick={toggleAuthModal}>Iniciar Sesión</button>
        </div>

        <div 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <Modal isOpen={showAuthModal} onClose={toggleAuthModal}>
        {authMode === 'login' ? (
          <LoginForm onSwitchToRegister={switchAuthMode} />
        ) : (
          <RegisterForm onSwitchToLogin={switchAuthMode} />
        )}
      </Modal>
    </>
  )
}

export default Navbar;