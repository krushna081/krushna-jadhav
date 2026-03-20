import { useState } from 'react';

const projectItems = [
  {
    title: 'SK Studio - Fine Art Photography Portfolio',
    icon: 'fa-solid fa-camera',
    description: 'SK Studio & Co. is a modern, minimalist photography portfolio website built for a fine art photography business specializing in wedding and portrait photography. Built with React 18.3.1 and Vite, it features category-based galleries, lightbox viewer with keyboard navigation, comprehensive contact forms with validation, and optimized image loading. The project showcases professional photography work with an elegant, user-focused design that captures timeless moments with artistry and care.',
    link: 'https://www.skstudio.co.in/',
    linkText: 'View Live Site',
  },
  {
    title: 'MCP Web Scrape - Intelligent Web Content Extraction',
    icon: 'fa-solid fa-spider',
    description: '"MCP Web Scrape" is a TypeScript-based web scraping framework that transforms messy HTML into clean, agent-ready content. Built on the Model Context Protocol (MCP), it provides intelligent content extraction with features including Markdown conversion, automatic citations, robots.txt compliance, ETag caching, and AI-powered summarization for seamless integration with AI assistants.',
    link: 'https://github.com/mukul975/mcp-web-scrape',
    linkText: 'GitHub Link',
  },
  {
    title: 'MCP Windows Server - AI-Powered Windows Automation',
    icon: 'fa-solid fa-desktop',
    description: '"MCP Windows Server" is a Python-based automation framework that enables AI assistants like Claude and ChatGPT to control Windows systems through natural language commands. This server implements the Model Context Protocol (MCP) to provide secure, comprehensive system-level automation with 200+ tools for file operations, system control, web automation, and Office integration.',
    link: 'https://github.com/mukul975/mcp-windows-automation',
    linkText: 'GitHub Link',
  },
  {
    title: 'An Enhanced Haze Removal: Using DCP and Enriched-Invariant Features',
    icon: 'fa-solid fa-wand-magic-sparkles',
    description: 'The project proposes an enhanced method for removing haze from images using Dark Channel Prior (DCP) and Enriched-Invariant Features. This approach aims to improve the accuracy and efficiency of existing haze removal techniques, particularly in situations where the visibility is severely impaired by haze.',
  },
  {
    title: 'EmailGuard - Proactive Email Phishing Detection using Artificial Intelligence',
    icon: 'fa-solid fa-terminal',
    description: 'Developed and implemented "EmailGuard," an AI-driven system for detecting phishing emails using 50 extensive features. The system leverages machine learning algorithms and natural language processing to analyze email content and metadata, distinguishing between legitimate and phishing emails. This project significantly enhanced cybersecurity measures, reduced phishing incidents, and improved the overall security posture of the organization.',
  },
  {
    title: 'Multicast Wireless Routing Protocol In Java Programming',
    icon: 'fa-solid fa-code',
    description: 'The Multicast Wireless Routing Protocol project in Java programming aims to develop a protocol for efficient data transmission over wireless networks using multicasting. The project involves implementing algorithms to optimize data transmission and minimize delays and packet losses.',
  },
  {
    title: 'Vampire Attacks Draining Life from Wireless Ad Hoc Sensor Networks',
    icon: 'fa-solid fa-terminal',
    description: '"Vampire Attacks" is a Java-based application that simulates and analyzes the impact of vampire attacks on wireless sensor networks. This application explores the vulnerabilities of such networks and mimics the behavior of energy-draining malicious nodes.',
    link: 'https://github.com/mukul975/Vampire-Attacks-Draining-Life-from-Wireless-Ad-Hoc-Sensor-Networks',
    linkText: <>Read More <i className="fas fa-arrow-right"></i></>,
    linkClass: 'read-more-btn',
  },
  {
    title: 'Pack India Packers and Movers Website Development Project',
    icon: 'fa-solid fa-terminal',
    description: 'I successfully crafted a professional website for Pack India Packer and Movers, highlighting their top-tier relocation services. The site provides seamless user experience, valuable information, and easy client interaction, bolstering Pack India\'s online presence and their mission of smooth moving solutions.',
  },
];

function Projects() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="introduction" style={{ backgroundColor: '#25262a' }}>
      <div className="heading-container">
        <h3 className="section-heading techy-title">Latest Projects</h3>
        <p className="creative-title">Perfect solutions for digital experience</p>
      </div>
      <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', padding: '100px 40px', minHeight: '95vh', alignItems: 'center', width: '100vw' }}>
        <div className="image-container">
          <div className="body-part-2">
            <div className="container">
              <div className="svg-animation">
                <img src="/assets/project.svg" alt="Project SVG" className="responsive-svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="cards-container">
          <div className="cards">
            {projectItems.map((item, i) => (
              <div
                key={i}
                className={`design-card${activeCard === `project-${i}` ? ' active' : ''}`}
                onClick={() => setActiveCard(activeCard === `project-${i}` ? null : `project-${i}`)}
              >
                <div>
                  <h3>{item.title}</h3>
                  <i className={item.icon}></i>
                </div>
                <p>{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={item.linkClass || ''}
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
