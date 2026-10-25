import { Link } from 'react-router-dom'
import { profile, education, certifications } from '../data.js'

function About() {
  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page__title">About me</h1>
        <div className="about-grid">
          <div className="prose">
            <p>
              I am {profile.name}, a Computer Science and Engineering graduate
              from {profile.location}. I build full-stack web apps with the
              MERN stack: MongoDB, Express.js, React.js and Node.js.
            </p>
            <p>
              I like turning real-life flows into working software. In my
              counselling platform a client can find a counsellor, book a slot,
              pay online, chat and join a video session. The counsellor can keep
              private notes and see every client&rsquo;s history.
            </p>
            <p>
              I am looking for an entry-level software developer role where I
              can keep learning and build real features. You can see how I work
              in my{' '}
              <Link className="text-link" to="/projects">projects</Link> and on{' '}
              <a className="text-link" href={profile.github}>GitHub</a>.
            </p>
          </div>

          <section className="panel" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <ul className="rows">
              {education.map((item) => (
                <li key={item.title} className="row">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                    <p>
                      {item.years}, {item.score}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="certifications-title">
          <h2 id="certifications-title" className="block-title">
            Certifications
          </h2>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.title} className="cert">
                <h3>{cert.title}</h3>
                {cert.link ? (
                  <a
                    className="button button--ghost button--small"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View certificate
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About