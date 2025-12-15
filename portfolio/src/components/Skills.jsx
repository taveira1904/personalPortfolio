import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const skillsData = [
  { name: 'React', percent: 60 },
  { name: 'JavaScript', percent: 60 },
  { name: 'MySql', percent: 80 },
  { name: 'CSS', percent: 95 },
   { name: 'HTML', percent: 95 },
   { name: 'JS', percent: 70 },
   { name: 'Wordpress', percent: 95 },
   { name: 'Quality Assurance', percent: 100 },
];

const Donut = ({ skill }) => {
  const circleRef = useRef(null);
  useEffect(() => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (skill.percent / 100) * circumference;
    circleRef.current.style.strokeDashoffset = offset;
  }, [skill.percent]);

  return (
    <div className="donut">
      <svg width="120" height="120">
        <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="10" fill="none" />
        <circle ref={circleRef} cx="60" cy="60" r="50" stroke="#3b82f6" strokeWidth="10" fill="none" transform="rotate(-90 60 60)" strokeLinecap="round"/>
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="18">{skill.percent}%</text>
      </svg>
      <p>{skill.name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills container" id="skills">
      <h2 className="section-title">Skills Técnicas</h2>
      <div className="skills-grid">
        {skillsData.map(skill => <Donut key={skill.name} skill={skill} />)}
      </div>
    </section>
  );
};

export default Skills;
