import React from 'react';
import '../styles/About.css';
import profilePic from '../images/taveiraweb.png';

const stack = 
[
  'React', 
  'JavaScript',
  'HTML5 & CSS3',
  'Wordpress',
  'Git & GitHub', 
];
const workplaces = 
[
  'Connect Digital',
  'Secis',
  'Freelancer'];
const About = () => {
  return (
   <section className="about" id="about">
  <div className="about-wrapper">

    <div className="about-left">
      <span className="about-eyebrow">Sobre mim</span>
      <h2>
        Frontend Developer focado em<br />
        <span>experiência, performance e detalhe</span>
      </h2>

      <ul className="about-list">
        <li>
          <strong>Formação:</strong>
          Licenciatura em Informática
        </li>
        <li>
          <strong>Experiência Profissional:</strong>
          {workplaces.join(', ')}
        </li>
        <li>
          <strong>Stack:</strong>
          {stack.join(', ')}
        </li>
        <li>
          <strong>Objetivo:</strong>
          Desenvolver produtos digitais escaláveis, com interfaces intuitivas e alto padrão visual.
        </li>
      </ul>
    </div>

    <div className="about-right">
      <div className="photo-card">
        <img src={profilePic} alt="Tomás Ferreira" />
      </div>
    </div>

  </div>
</section>

  );
};

export default About;
