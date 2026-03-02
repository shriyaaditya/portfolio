import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">

      {/* Background */}
      <ParallaxBackground />

      {/* Foreground Content */}
      <div className="relative z-10">
        <HeroText />
      </div>

    </section>
  );
};

export default Hero;