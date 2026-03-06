import React from "react";
import Card from "../components/ProjectCard.jsx";
import { myProjects } from "../constants/index.js";

const ProjectsSection = () => {
  return (
    <section className="c-space section-spacing" id="projects">
  <h2 className="text-heading pb-10 md:pb-12">Projects</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        justifyItems: "center",
      }}
    >
      {myProjects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          month={project.month}
          date={project.date}
          seeMore={project.href}
        />
      ))}
    </div>
    </section> 
  );
};

export default ProjectsSection;