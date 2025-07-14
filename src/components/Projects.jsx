import { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'react',
      image: './assets/images/screen.png.png',
      demo: 'https://awesome-shop-flame.vercel.app/',
      description: 'A full-featured e-commerce platform built with React.',
      tags: ['React', 'Context API', 'CSS']
    },
    {
      id: 2,
      title: 'Payment Portal',
      category: 'react',
      image: './assets/images/stripe.png',
      demo: 'https://mystrp.netlify.app/',
      description: 'A featured payment website built with React.',
      tags: ['React','Context API', 'CSS']
    },
    {
      id: 3,
      title: 'Text to Speech',
      category: 'javascript',
      image: './assets/images/speech.png',
      demo: 'https://text-to-speech-seven-tau.vercel.app/',
      description: 'A Text to Speech platform built with Javascripts.',
      tags: ['javaScript']
    },
     {
      id: 4,
      title: 'Brand Stategy',
      category: 'react',
      image: './assets/images/brands.png',
      demo: 'https://brand-strategist-portfolio.vercel.app/',
      description: 'A Brand Strategist website built with React and Typescripts.',
      tags: ['React', 'Typescripts']
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
            onClick={() => setFilter('javascript')}
          >
            JavaScript
            
          </button>
          
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;