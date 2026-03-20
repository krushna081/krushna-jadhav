import { useState, useEffect } from 'react';

function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Initialize Calendly badge widget (floating button)
  useEffect(() => {
    const initBadge = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/krushnacjadhav0807',
          text: 'Schedule with krushna',
          color: '#25262a',
          textColor: '#ffffff',
          branding: true,
        });
      }
    };

    // Calendly script may already be loaded or still loading
    if (window.Calendly) {
      initBadge();
    } else {
      window.addEventListener('load', initBadge);
      return () => window.removeEventListener('load', initBadge);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/krushnacjadhav0807' });
    }
  };

  return (
    <section id="footer" style={{ backgroundColor: '#25262a' }}>
      <div className="footer-left">
        <form name="contactus" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contactus" />
          <h2 className="techy-title">💬 Let's make something amazing together</h2>

          <div className="email-form">
            <h2 className="creative-title">Start by <span>saying hi</span> 👋</h2>

            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div>
              <label htmlFor="message" className="message-label">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send</button>
            </div>
          </div>
        </form>

        <div className="footer-title">
          <h3 className="title-first-name">krushna</h3>
          <h3 className="title-last-name">jadhav</h3>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-email-intro">
          <p>Information</p>
          <h6>Berlin, Deustchland</h6>
          <h3>hotbuzzhub@gmail.com</h3>
          <a href="#" onClick={openCalendly}>Schedule time with me</a>
        </div>
        <div className="footer-nav-menu">
          <ul className="footer-menu">
            <li><a href="#aboutme">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#introduction">Works</a></li>
            <li><a href="#skill">Skills</a></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/krushna975/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/mukul975" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/_mukul.jadhav_/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
