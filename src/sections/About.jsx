import { useRef } from "react";
//import { Globe } from "../components/globe";
//import CopyEmailButton from "../components/CopyEmailButton";
//import { Frameworks } from "../components/FrameWorks";
import ThreeDCardDemo from "../components/3d-card-demo";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading pb-10 md:pb-12">About Me</h2>
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
        <ThreeDCardDemo />
         
         
        </div>
        
       
    </section>
  );
};

export default About;