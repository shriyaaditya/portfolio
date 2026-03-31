import React, { Suspense, useEffect, useRef, useState } from "react";
import Card from "../components/ProjectCard.jsx";
import { myProjects } from "../constants/index.js";

const PixelBlast = React.lazy(() => import("@/components/PixelBlast.jsx"));

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBackground(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="c-space section-spacing relative overflow-hidden"
      id="projects"
      ref={sectionRef}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
      <div style={{ width: '100%', height: '800px', position: 'relative' }}>
        {showBackground ? (
          <Suspense fallback={null}>
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
          </Suspense>
        ) : null}
</div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-heading pb-10 md:pb-12">Projects</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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