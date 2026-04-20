import '../styles/training.css';

function Training() {
  return (
    <section className="training-page">
      <header className="training-header">
        <p className="section-label">Training & Experience</p>

        <h1>Developing skills to support individuals and communities.</h1>

        <p>
          I am currently pursuing my Master's in Social Work while gaining
          hands-on experience in community-based programs. My work focuses on
          supporting individuals in navigating employment, building skills, and
          accessing opportunities that support long-term stability.
        </p>
      </header>

      <section className="training-section">
        <article className="training-card">
          <h2>Center for Changing Lives</h2>
          <p className="role-meta">
            Employment Coaching Intern · 2025-Present
          </p>

          <p>
            In my current role at the{' '}
            <a
              href="https://www.cclconnect.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
             Center for Changing Lives
            </a>
            , I support employment coaching services that help individuals access job
            training and career development resources. I coordinate meetings between
            staff and community members, assist with onboarding and documentation, and
            contribute to outreach efforts for programs such as the Google IT Certification initiative.
          </p>

          <p>
            I have also developed and led internal training sessions, including
            workshops on ethical AI use, helping staff engage thoughtfully with
            emerging tools in their work.
          </p>
        </article>
      </section>
    </section>
  );
}

export default Training;