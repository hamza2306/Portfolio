import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
