import React from 'react';
import '../styles/Projects.css';

const projectsData = [
  { name: 'Projeto 1', desc: 'Aplicação de pesquisa de imagens', tech: 'JavaScrip, HTML & CSS', github: 'https://github.com/taveira1904/imageBank', demo: '#' },
  { name: 'Projeto 2', desc: 'Controlo Universitário', tech: 'Python, Google Cloud,Firebase, HTML & CSS', github: 'https://github.com/taveira1904/webstatic', demo: '#' },
];

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="section-title">Projetos Universitários</h2>
      <div className="projects-grid">
        {projectsData.map(p => (
          <div className="project-card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <p><strong>Tecnologias:</strong> {p.tech}</p>
            <div className="project-links">
              <a href={p.github} target="_blank" className="btn">GitHub</a>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
