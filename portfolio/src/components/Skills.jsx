import React, { useRef } from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'React', level: 'Avançado' },
  { name: 'HTML', level: 'Avançado' },
  { name: 'CSS', level: 'Avançado' },
  { name: 'Quality Assurance', level: 'Avançado' },
  { name: 'JS', level: 'Intermédio' },
  { name: 'MYSQL', level: 'Intermédio' },
   { name: 'UX/UI', level: 'Intermédio' }
];

const Skills = () => {
  const sliderRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const scroll = (direction) => {
    const amount = 260;
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    isDownRef.current = true;
    sliderRef.current.classList.add('dragging');
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!sliderRef.current) return;
    isDownRef.current = false;
    sliderRef.current.classList.remove('dragging');
  };

  const handleMouseUp = () => {
    if (!sliderRef.current) return;
    isDownRef.current = false;
    sliderRef.current.classList.remove('dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // velocidade
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>
          ‹
        </button>

        <div
          className="skills-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
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
