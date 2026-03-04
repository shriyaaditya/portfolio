import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const Project = () => {
  const projects = new Array(6).fill(null);

  return (
<section className="c-space section-spacing" id="about">
    <h2 className="text-heading pb-10 md:pb-12">Projects</h2>
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-12
      items-center
      justify-items-center
      p-6 md:p-10"
    >
      {projects.map((_, index) => (
        <ProjectCard key={index} />
      ))}
    </div>

    </section>
  );
};

export default Project;