import { projects } from '../data.js'

function Projects() {
  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page__title">Projects</h1>
        <p className="section__intro">
          Four projects I built. Every project links to its code.
        </p>

        <ul className="project-list">
          {projects.map((project) => (
            <li className="project" key={project.title}>
              <div>
                <h2>{project.title}</h2>
                <p className="project__tech">{project.tech.join(', ')}</p>
              </div>

              <div className="project__body">
                <p>{project.description}</p>

                {project.points.length > 0 ? (
                  <ul className="bullets">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                <p className="actions">
                  {project.live ? (
                    <a
                      className="text-link"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open live demo
                    </a>
                  ) : null}
                  {project.code.map((link) => (
                    <a
                      key={link.url}
                      className="text-link"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </p>

                {project.demo.length > 0 ? (
                  <div className="demo">
                    <h3>Try it yourself</h3>
                    <dl>
                      {project.demo.map((account) => (
                        <div key={account.role}>
                          <dt>{account.role}</dt>
                          <dd>
                            {account.email} / {account.password}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ) : null}

                {project.note ? <p className="note">{project.note}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects