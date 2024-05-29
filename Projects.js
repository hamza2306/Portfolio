import React from 'react';

const projects = [
  { title: '1.To-Do-List', description: 'To do list for the daily task ' },
  { title: '2. Porfolio application', description: 'Portfolio reflecting the info about me ' },
  { title: '3. Project 3', description: 'Description of project 3' },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
