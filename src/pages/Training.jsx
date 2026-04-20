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
            I also develop and lead internal training sessions, including a
            workshop on ethical AI use, helping staff engage thoughtfully with
            emerging tools in their work.
          </p>
        </article>
      </section>

      <section className="education-section">
        <h2>Education</h2>

        <div className="education-list">
          <div className="education-item">
            <h3>University of Illinois Urbana-Champaign</h3>
            <p>Master of Social Work (MSW) · Expected December 2027</p>
            <p>Bachelor of Social Work · May 2026</p>
          </div>

          <div className="education-item">
            <h3>City Colleges of Chicago - Harold Washington</h3>
            <p>Associate of Social Work · May 2024</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Training;