import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Tomás Ferreira</h1>
        <h2>Web Developer / Frontend junior specialist</h2>
        <p>Desenvolvo aplicações web modernas e responsivas com foco em performance e UX.</p>
        <div>
          <button className="btn" onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>Ver Projetos</button>
          <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>Contactar</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
