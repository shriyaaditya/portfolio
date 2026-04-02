import { motion } from "framer-motion";

const techStack = [
    { name: "C++", icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", link: "https://isocpp.org/" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg", link: "https://www.python.org" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", link: "" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg", link: "https://www.java.com/en/" },
  { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", link: "https://nodejs.org" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", link: "https://expressjs.com" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", link: "https://react.dev" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg", link: "https://reactnative.dev" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg", link: "https://firebase.google.com" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", link: "https://www.mysql.com" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg", link: "https://www.mongodb.com" }, 
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg", link: "https://www.postman.com" },
  { name: "Numpy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg", link: "https://numpy.org/" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg", link: "https://pandas.pydata.org/" },

  { name: "Scikit Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", link: "https://scikit-learn.org/stable/" },

];

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
         <p className="pb-12 font-extrabold text-2xl">My Skills</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
       
        {techStack.map((tech, index) => (
            
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-30 h-30 md:w-28 md:h-28
                rounded-2xl
                bg-white/10
                backdrop-blur-lg
                border border-white/10
                flex items-center justify-center
                shadow-lg
                hover:shadow-[#E5A7C3]
                transition-all duration-300
                cursor-pointer
              "
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-18 h-18 object-contain"
              />
               
            </motion.div>
          </a>
        ))}

      </div>
    </div>
  );
};

export default TechStack;