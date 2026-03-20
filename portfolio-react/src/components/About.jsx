function About() {
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/krushnacjadhav0807' });
    }
  };

  return (
    <section id="aboutme">
      <div className="body-part-2">
        <div className="container">
          <div className="svg-animation">
            <img src="/assets/who.svg" alt="Who SVG" className="responsive-svg" />
          </div>
        </div>
      </div>
      <div className="body-part-1">
        <div className="body-title">
          <h1>Who Am I?</h1>
          <p>
            I'm Krushna Jadhav, a cybersecurity and front-end development enthusiast from India, currently pursuing a
            B.Sc. in Cyber &amp; Digital Science at Savitribai Phule Pune University (SPPU).
            I am focused on building a strong foundation in cybersecurity principles, secure computing, and modern web technologies.
          </p>
          <p>
            My technical interests include ethical hacking fundamentals, system and network security, Linux environments,
            and secure web development. Alongside cybersecurity, I actively work with HTML, CSS, and JavaScript to design
            clean, responsive, and user-friendly interfaces. I believe that effective security begins with well-designed
            and well-understood systems.
          </p>
          <p>
            I enjoy learning through hands-on projects, practical experimentation, and continuous self-study.
            My current goals include strengthening my defensive security knowledge, building real-world projects,
            improving my problem-solving skills, and developing professional-level English communication for global opportunities.
          </p>
          <p>
            This portfolio showcases my learning journey, projects, and technical growth in both cybersecurity
            and front-end development. I aim to continuously improve, contribute to meaningful projects,
            and prepare for advanced studies and a long-term career in cybersecurity.
          </p>
          <p>
            If you're interested in secure technology, digital innovation, or collaborative learning,
            feel free to explore my work and connect with me.
          </p>
          <a href="#" onClick={openCalendly}>LET'S Connect!</a>
        </div>
      </div>
    </section>
  );
}

export default About;
