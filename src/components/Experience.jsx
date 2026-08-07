const experienceList = [
  {
    role: 'Bartender',
    place: 'Nombre del bar/local',
    period: '2023 - Presente',
    description: 'Encargado de barra en turno noche, atención de coctelería clásica y de autor.',
  },
  {
    role: 'Bartender freelance',
    place: 'Eventos privados',
    period: '2022 - Presente',
    description: 'Cobertura de barra en casamientos, cumpleaños y eventos corporativos.',
  },
  {
    role: 'Ayudante de barra',
    place: 'Nombre del local',
    period: '2021 - 2022',
    description: 'Primeros pasos en coctelería, aprendizaje de técnicas base y atención al público.',
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience