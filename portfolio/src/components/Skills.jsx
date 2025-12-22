import React, { useRef } from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'React', level: 'Avançado' },
  { name: 'HTML', level: 'Avançado' },
  { name: 'CSS', level: 'Avançado' },
  { name: 'Quality Assurance', level: 'Avançado' },
  { name: 'JS', level: 'Intermédio' },
  { name: 'MYSQL', level: 'Intermédio' },
];

const Skills = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const amount = 260;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>
          ‹
        </button>

        <div className="skills-slider" ref={sliderRef}>
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll('right')}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Skills;
