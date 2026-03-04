
import ThreeDCardDemo from "../components/3d-card-demo";
import Card from "../components/card.jsx"


const About = () => {
  return (
<section className="c-space section-spacing" id="about">
  <h2 className="text-heading pb-10 md:pb-12">About Me</h2>

  <div
    className="
    grid 
    grid-cols-1 
    md:grid-cols-2
    gap-12
    items-center
    justify-items-center
    p-6 md:p-10
    grid-default-color
  "
  >
    <div className="w-full flex justify-center">
      <ThreeDCardDemo />
    </div>

    <div className="w-full flex justify-center">
      <Card />
    </div>
  </div>
</section>  );
};

export default About;