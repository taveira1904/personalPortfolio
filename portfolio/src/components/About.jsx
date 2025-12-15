import React from 'react';
import '../styles/About.css';
import profilePic from '../images/taveiraweb.png';

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="about-content">
        <div className="about-text">
          <p><strong>Formação:</strong> Licenciatura em Engenharia Informática</p>
          <p><strong>Experiência:</strong> 3 anos desenvolvendo aplicações web</p>
          <p><strong>Especializações:</strong> Frontend, Backend, APIs, DevOps</p>
          <p><strong>Objetivo:</strong> Criar soluções web escaláveis e modernas.</p>
        </div>
        <div className="about-photo">
          <img src= {profilePic} alt ="Foto profissional" />
        </div>
      </div>
    </section>
  );
};

export default About;
