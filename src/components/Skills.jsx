const skillsList = [
  { name: 'DECIRLE A FIORE QUE SE BUSQUE UN LABURO', level: 90 },
  { name: 'Robarle chicles a Meli', level: 80 },
  { name: 'Sacarle el cuero a MACARENA VALDEZ ALIAS LA NUEVA JEFA', level: 60 },
  { name: 'DECIRLE A FIORE QUE SE BUSQUE UN LABURO', level: 95 },
  { name: 'Decirle a IGNACIO AVILA que no sea TAN PUTO', level: 85 },
  { name: 'Recordarle a MARINA NIEVAS CAJERA DEL TORI CERRO que ingrese a horario ', level: 99 },
  { name: 'Recordarle a MARINA NIEVAS CAJERA DEL TORI CERRO que ingrese a horario ', level: 99 },
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