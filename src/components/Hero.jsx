import heroBg from '../assets/images/barraOcasoEditada.jpg'
function Hero() {
  return (
    <section className="hero" id="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Tobías González Parra</h1>
            <p className="hero-subtitle">Bartender Profesional</p>
        <a href="#contact" className="hero-button">Contactame</a>
      </div>
    </section>
  )
}

export default Hero