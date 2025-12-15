import React from 'react';
import '../styles/Projects.css';

const projectsData = [
  { name: 'Projeto 1', desc: 'Aplicação web moderna', tech: 'React, Node.js', github: '#', demo: '#' },
  { name: 'Projeto 2', desc: 'Dashboard interativo', tech: 'React, Firebase', github: '#', demo: '#' },
];

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-grid">
        {projectsData.map(p => (
          <div className="project-card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <p><strong>Tecnologias:</strong> {p.tech}</p>
            <div className="project-links">
              <a href={p.github} target="_blank" className="btn">GitHub</a>
              <a href={p.demo} target="_blank" className="btn">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
