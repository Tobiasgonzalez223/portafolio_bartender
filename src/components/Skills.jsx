const skillsList = [
  { name: 'Gestión eficiente en servicios de alta demanda', level: 90 },
  { name: 'Perfil resolutivo', level: 80 },
  { name: 'Coctelería clásica y de autor', level: 60 },
  { name: 'Trato cordial y profesional', level: 95 },
  { name: 'Trabajo en equipo', level: 85 },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Habilidades</h2>
        <div className="skills-list">
            {skillsList.map((skill) => (
            <div className="skill-item" key={skill.name}>
                <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.level}%` }}
                ></div>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Skills