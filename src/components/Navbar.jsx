import { useState } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">Tobías González Parra</div>

      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 'Cerrar' : '☰'}
      </button>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
        <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Galería</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar