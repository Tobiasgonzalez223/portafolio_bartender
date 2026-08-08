function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {currentYear} Tobías González Parra — Bartender Profesional</p>
    </footer>
  )
}

export default Footer