import React from "react";
import Card from "../components/ProjectCard.jsx";
import { myProjects } from "../constants/index.js";
import PixelBlast from "@/components/PixelBlast.jsx";

const ProjectsSection = () => {
  return (
    <section
      className="c-space section-spacing relative overflow-hidden"
      id="projects"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
      <div style={{ width: '100%', height: '800px', position: 'relative' }}>
  <PixelBlast
    variant="square"
    pixelSize={4}
    color="#32ec6a"
    patternScale={6.25}
    patternDensity={0.75}
    pixelSizeJitter={0.45}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid={false}
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.8}
    edgeFade={0.25}
    transparent
  />
</div>
      </div>

      {/* Content */}
      <div className="relative z-10">
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
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;