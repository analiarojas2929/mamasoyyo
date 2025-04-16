import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../logo/Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Logo />
        <h1>MamáSoyYo</h1>
      </div>
      
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/servicios" className="nav-link">Servicios</Link>
        <Link to="/talleres" className="nav-link">Talleres</Link>
        <Link to="/comunidad" className="nav-link">Comunidad</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
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