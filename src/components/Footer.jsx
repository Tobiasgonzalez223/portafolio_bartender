function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {currentYear} Tu Nombre — Bartender Profesional</p>
    </footer>
  )
}

export default Footer