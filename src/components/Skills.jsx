import { useState } from 'react';

const skillCategories = [
  {
    title: 'Programming',
    icon: 'fa-solid fa-wand-magic-sparkles',
    skills: 'Java • Python • MATLAB • C++ • C',
  },
  {
    title: 'Cybersecurity',
    icon: 'fa-solid fa-wand-magic-sparkles',
    skills: 'Threat Detection • Network Security • Cybersecurity Architecture • Ethical Hacking • Social Engineering • Information Security Management System (ISMS) • IT Audit • IT Security Assessments • Penetration Testing',
  },
  {
    title: 'AI & Machine Learning',
    icon: 'fa-solid fa-wand-magic-sparkles',
    skills: 'Natural Language Processing (NLP) • Machine Learning • AI Model Training • Data Analysis • Feature Engineering',
  },
  {
    title: 'Web Development',
    icon: 'fa-solid fa-code',
    skills: 'HTML • Cascading Style Sheets (CSS) • JavaScript • PHP • Full-Stack Development • Front-End Development',
  },
  {
    title: 'Others',
    icon: 'fa-solid fa-terminal',
    skills: 'Google Cloud Platform (GCP) • Adobe Photoshop • Computer Science • Software Development • English • Project Management • Engineering • Communication • Training • Leadership • Marketing • Customer Service • Microsoft Office',
  },
];

function Skills() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="skill" style={{ backgroundColor: '#2d2e3273' }}>
      <div className="heading-container">
        <h3 className="section-heading techy-title">Skills</h3>
        <p className="creative-title">Technical expertise and tools</p>
      </div>
      <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', padding: '100px 40px', minHeight: '95vh', alignItems: 'center', width: '100vw' }}>
        <div className="cards-container">
          <div className="cards">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className={`design-card${activeCard === `skill-${i}` ? ' active' : ''}`}
                onClick={() => setActiveCard(activeCard === `skill-${i}` ? null : `skill-${i}`)}
              >
                <div>
                  <h3>{cat.title}</h3>
                  <i className={cat.icon}></i>
                </div>
                <p>{cat.skills}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          <div className="body-part-2">
            <div className="container">
              <div className="svg-animation">
                <img src="/assets/skill.svg" alt="Skill SVG" className="responsive-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
