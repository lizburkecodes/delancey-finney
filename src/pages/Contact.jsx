import '../styles/contact.css';

function Contact() {
  // TODO: Make MUCH better.. 
  return (
    <section className="contact-page">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="section-label">Contact</p>
          <h1>Let's connect.</h1>
          <p>
            If you'd like to collaborate, or learn more about my work,
            feel free to reach out. I'd be glad to hear from you.
          </p>
        </div>

        <div className="contact-card">
          <h2>Get in touch</h2>

          <a href="mailto:delanceyfinney@gmail.com" className="email-link">
            delanceyfinney@gmail.com
          </a>

          <p className="location">📍 Chicago, IL</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;