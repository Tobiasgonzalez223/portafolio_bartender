const skillsList = [
  'Gestión eficiente en servicios de alta demanda',
  'Perfil resolutivo',
  'Coctelería clásica y de autor',
  'Trato cordial y profesional',
  'Trabajo en equipo',
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-list">
        {skillsList.map((skill) => (
          <div className="skill-item" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills