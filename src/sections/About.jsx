import { useRef } from "react";
//import { Globe } from "../components/globe";
//import CopyEmailButton from "../components/CopyEmailButton";
//import { Frameworks } from "../components/FrameWorks";
import ThreeDCardDemo from "../components/3d-card-demo";
import Card from "../components/card.jsx"


const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading pb-10 md:pb-12">About Me</h2>
        {/* Grid 1 */}
        <div className="grid-default-color grid-1 
                flex flex-col md:flex-row 
                items-center 
                justify-between 
                gap-12 
                p-10">
  
  <div className="w-full md:w-1/2 flex justify-center">
    <ThreeDCardDemo />
  </div>

  <div className="w-full md:w-1/2 flex justify-center">
    <Card />
  </div>

</div>
        
       
    </section>
  );
};

export default About;