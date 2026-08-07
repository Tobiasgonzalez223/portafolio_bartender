const experienceList = [
  {
    role: 'Bartender y Referente de Barra',
    place: 'Unplugged, Córdoba | @unp.cerro',
    period: 'Mayo 2023 - Actualidad',
    description: 'Coordinación del funcionamiento de barra durante servicios de alta demanda. Control y reposición de stock. Apertura y cierre de barra.',
    reference: 'Juan Manuel Ferreyra (Enc. depósito) - Ref. +54 9 3543692588.'
  },
  {
    role: 'Bartender y Encargado de Barra',
    place: 'Bar El Tori, Córdoba | @bar.eltori',
    period: 'Febrero - Septiembre 2025',
    description: 'Organización y control del funcionamiento de barra. Coordinación de stock general del bar.',
    reference: 'Leandro Torres (Dueño) - Ref. +54 9 351559 8887.'
  },
  {
    role: 'Bartender de soporte',
    place: 'Ocaso Bar, Córdoba | @ocasobar_',
    period: '2025 - 2026',
    description: 'Contratado para eventos de alto volumen. Dominio de carta de coctelería clásica y de autor.',
    reference: 'Nahuel Rubio (Dueño) - Ref. +54 9 351 2435398'
  },
]

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experiencia</h2>
      <div className="experience-list">
        {experienceList.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-period">{exp.period}</div>
            <div className="experience-details">
              <h3>{exp.role}</h3>
              <p className="experience-place">{exp.place}</p>
              <p className="experience-description">{exp.description}</p>
              <p className="experience-reference">📞 Referencia: {exp.reference}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience