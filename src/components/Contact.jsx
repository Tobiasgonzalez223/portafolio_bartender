const contactLinks = [
  {
    label: 'WhatsApp',
    value: '+54 9 3543 512100',
    href: 'https://wa.me/5493543512100',
  },
  {
    label: 'Instagram',
    value: '@_tobias_gonzalez_',
    href: 'https://instagram.com/_tobias_gonzalez_',
  },
  {
    label: 'Email',
    value: 'tobiasgonzalez223@gmail.com',
    href: 'mailto:tobiasgonzalez223@gmail.com',
  },
]

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contacto</h2>
      <p className="contact-intro">
        ¿Buscás un bartender para tu evento o local? Escribime por cualquiera de estos medios.
      </p>
      <div className="contact-links">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-label">{link.label}</span>
            <span className="contact-value">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact