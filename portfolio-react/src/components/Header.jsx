import { useState, useEffect, useCallback } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const navItems = [
    { label: 'About', href: '#aboutme' },
    { label: 'Research', href: '#research' },
    { label: 'Works', href: '#introduction' },
    { label: 'Skills', href: '#skill' },
    { label: 'Contacts', href: '#footer' },
  ];

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    let closestIndex = 0;
    let minDistance = Infinity;
    sections.forEach((section, i) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - 80);
      if (rect.top <= 100 && distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });
    setActiveLink(closestIndex);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section id="header">
      <div className="navbar-title">
        <h3 className="title-first-name">Krushna-Jadhav</h3>
      </div>
      <button
        id="menu-toggle"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className={`navbar-menu-container${menuOpen ? ' active' : ''}`}>
        <ul className="navbar-menu">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeLink === i ? 'active' : ''}
                onClick={() => { setActiveLink(i); setMenuOpen(false); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`social-media-container${menuOpen ? ' active' : ''}`}>
        <ul className="social-media">
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/in/krushna-jadhav081" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com/krushna081" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:hotbuzzhub@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
