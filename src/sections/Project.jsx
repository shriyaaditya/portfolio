import React from "react";
import Card from "../components/ProjectCard.jsx";
import { myProjects } from "../constants/index.js";

const ProjectsSection = () => {
  return (
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
  );
};

export default ProjectsSection;