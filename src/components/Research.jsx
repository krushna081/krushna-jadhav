import { useState } from 'react';

const researchItems = [
  {
    title: 'An Enhanced Haze Removal: Using DCP and Enriched-Invariant Features',
    icon: 'fa-solid fa-flask',
    description: (
      <>
        Developed an algorithm for removing haze from images using a combination of Dark Channel Prior (DCP) and Enriched-Invariant Features.<br />
        Implemented the algorithm in MATLAB to remove haze from a variety of images.<br />
        Contributed to a research paper presenting the algorithm and its results, published in a peer-reviewed journal.<br />
        <strong>Journal:</strong> Lecture Notes in Networks and Systems, Springer<br />
        <strong>Year:</strong> 2022
      </>
    ),
    link: 'https://link.springer.com/chapter/10.1007/978-981-16-8721-1_25',
  },
  {
    title: 'Cybersecurity Awareness Among Young Adults: An Analytical Study',
    icon: 'fa-solid fa-flask',
    description: (
      <>
        Conducted cybersecurity awareness survey among 68 young adults (18-27 years) from universities in Germany and India.<br />
        Designed 15-question survey using quantitative methodology to assess phishing recognition, two-factor authentication, and encryption knowledge.<br />
        Found 75% use two-factor authentication but only 15% understand encryption concepts, revealing significant knowledge gaps.<br />
        Performed regression analysis (R² = 0.46) identifying confidence in data protection as key factor influencing cybersecurity behavior.<br />
        Published findings in IS&amp;T International Symposium on Electronic Imaging 2025, recommending gamification-based training programs.<br />
        <strong>Conference:</strong> IS&amp;T International Symposium on Electronic Imaging<br />
        <strong>Year:</strong> 2025
      </>
    ),
    link: 'https://doi.org/10.2352/EI.2025.37.3.MOBMU-312',
  },
];

function Research() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="research" style={{ backgroundColor: '#2d2e3273' }}>
      <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', padding: '100px 40px', minHeight: '95vh', alignItems: 'center', width: '100vw' }}>
        <div className="heading-container" style={{ flexBasis: '100%' }}>
          <h3 className="section-heading techy-title">Research</h3>
          <p className="creative-title">Academic and scientific contributions</p>
        </div>
        <div className="cards-container">
          <div className="cards">
            {researchItems.map((item, i) => (
              <div
                key={i}
                className={`design-card${activeCard === `research-${i}` ? ' active' : ''}`}
                onClick={() => setActiveCard(activeCard === `research-${i}` ? null : `research-${i}`)}
              >
                <div>
                  <h3>{item.title}</h3>
                  <i className={item.icon}></i>
                </div>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          <div className="body-part-2">
            <div className="container">
              <div className="svg-animation">
                <img src="/assets/research.svg" alt="Research SVG" className="responsive-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
