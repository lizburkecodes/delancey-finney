import '../styles/home.css';

function Home() {
  return (
    <section className="home-intro">
      <div className="intro-text">
        <h1>Delancey Finney</h1>

        <p className="credentials">
          Social Worker • Community Organizer
        </p>

        <p className="summary">
        Social worker and community organizer focused on creating spaces where people feel supported, heard, and empowered. My work is grounded in relationship-building, community care, and a belief in collective healing. As I continue my training, I remain committed to helping individuals and communities grow stronger together. 
        </p>

        <a
          href="/delancey-finney-resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>

          <div className="intro-image">
              <img
                  src="/delancey.webp"
                  alt="Delancey Finney"
                  className="headshot"
              />
          </div>
      </section>
  );
}

export default Home;