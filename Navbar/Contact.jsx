import { profile } from '../data.js'

function Contact() {
  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page__title">My Contact details</h1>
        <p className="section__intro">
          I am open to entry-level software developer roles. Email is the
          fastest way to reach me.
        </p>

        <dl className="contact">
          <div>
            <dt>Email</dt>
            <dd>
              <a className="text-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a className="text-link" href={profile.linkedin}>
                {profile.linkedin.replace('https://www.', '')}
              </a>
            </dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd>
              <a className="text-link" href={profile.github}>
                {profile.github.replace('https://', '')}
              </a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          {profile.resume ? (
            <div>
              <dt>Resume</dt>
              <dd>
                <a
                  className="text-link"
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download resume
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </div>
  )
}

export default Contact