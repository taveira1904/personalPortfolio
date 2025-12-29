import React from 'react';
import '../styles/Projects.css';

const projectsData = [
  { name: 'Projeto 1', desc: 'Aplicação de pesquisa de imagens', tech: 'JavaScript, HTML & CSS', github: 'https://github.com/taveira1904/imageBank', demo: '#' },
  { name: 'Projeto 2', desc: 'Controlo Universitário', tech: 'Python, Google Cloud, Firebase, HTML & CSS', github: 'https://github.com/taveira1904/webstatic', demo: '#' },
  { name: 'Projeto 3', desc: 'Gestão de Tarefas', tech: 'React+Vite,JS,HTML & CSS', github: 'https://github.com/taveira1904/TicketManager', demo: '#' },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner container">
        <header className="section-header">
          <p className="section-kicker">Portfólio</p>
          <h2 className="section-title">Projetos Universitários</h2>
          <p className="section-subtitle">
            Projetos de aprendizagem focados em frontend e integrações com serviços externos, mostrando evolução em UI, UX e boas práticas.
          </p>
        </header>

        <div className="projects-grid">
          {projectsData.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-glow" />
              <header className="project-header">
                <span className="project-badge">Universidade</span>
                <h3 className="project-title">{p.name}</h3>
              </header>

              <p className="project-desc">{p.desc}</p>

              <p className="project-tech">
                <span className="project-tech-label">Tecnologias</span>
                <span className="project-tech-stack">{p.tech}</span>
              </p>

              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  Ver github
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
