import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../logo/Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú móvil al hacer clic en un enlace
  }

  return (
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
        <button className="nav-button">Iniciar Sesión</button>
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
  )
}

export default Navbar