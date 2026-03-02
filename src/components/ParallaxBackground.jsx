import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 100,
  });
  const cloud1X = useTransform(smoothScroll, [0, 1], ["0%", "30%"]);
  const cloud2X = useTransform(smoothScroll, [0, 1], ["20%", "0%"]);
  const moonY = useTransform(smoothScroll, [0, 1], ["70%", "0%"]);
  const mountain3Y = useTransform(smoothScroll, [0, 1], ["40%", "0%"]);
  const forestX = useTransform(smoothScroll, [0, 1], ["-10%", "0%"]);
  const mountain2Y = useTransform(smoothScroll, [0, 1], ["10%", "0%"]);
  const mountain1Y = useTransform(smoothScroll, [0, 1], ["30%", "0%"]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
    <div
  className="absolute inset-0 w-full h-full 
             bg-[url('/assets/mobileSky.png')] 
             md:bg-[url('/assets/sky.png')] 
             bg-no-repeat 
             bg-bottom 
             bg-cover"
/>
      <motion.div
  className="absolute hidden md:block"
  style={{
    top: "50%",        
    right: "20%",        
    width: "12vw",       
    height: "12vw",
    backgroundImage: "url(/assets/moon.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    y: moonY,            
  }}
/>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/mountain3.png)",
          backgroundPosition: "bottom",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          y: mountain3Y,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/forest.png)",
          backgroundPosition: "bottom",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          x: forestX,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/mountain2.png)",
          backgroundPosition: "bottom",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          x: mountain2Y,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/mountain1.png)",
          backgroundPosition: "bottom",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          y: mountain1Y,
        }}
      />

      <motion.div
        className="absolute right-0 hidden md:block"
        style={{
          top: "195px",
          right: "0",
          width: "300px",
          height: "200px",
          backgroundImage: "url(/assets/cloud1.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          x: cloud1X,
        }}
      />

      <motion.div
        className="absolute right-0 hidden md:block"
        style={{
          right: "0px",
          width: "470px",
          height: "300px",
          backgroundImage: "url(/assets/cloud2.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          x: cloud2X,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
