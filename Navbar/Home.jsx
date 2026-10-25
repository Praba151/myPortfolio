import { Link } from 'react-router-dom'
import { profile, techChips } from '../data.js'

function Home() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <img
          className="hero__photo"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="308"
          height="461"
        />

        <div className="hero__text">
          {/* The non-breaking space keeps "Prabakaran B." on one line */}
          <h1>Hi, I&rsquo;m {profile.name.replace(' ', '\u00A0')}.</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__lead">
            I build full-stack web apps with React, Node.js, Express and
            MongoDB. My biggest project is an online counselling platform with
            booking, payments, real-time chat and video sessions.
          </p>

          <div className="hero__actions">
            <Link className="button" to="/projects">
              Explore projects
            </Link>
            {profile.resume ? (
              <a
                className="button button--ghost"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download resume
              </a>
            ) : null}
          </div>

          <ul className="chips" aria-label="Main technologies">
            {techChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>

          <p className="hero__links">
            <a className="text-link" href={profile.github}>GitHub</a>
            <a className="text-link" href={profile.linkedin}>LinkedIn</a>
            <a className="text-link" href={`mailto:${profile.email}`}>Email</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home