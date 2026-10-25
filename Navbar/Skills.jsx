import { skillGroups } from '../data.js'

function Skills() {
  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page__title">Skills</h1>
        <p className="section__intro">
          The tools I use to build full-stack web apps.
        </p>

        <div className="skill-lines">
          {skillGroups.map((group) => (
            <p className="skill-line" key={group.title}>
              <strong>{group.title} :</strong> {group.items.join(', ')}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills