import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80; 

    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-white font-bold text-lg cursor-pointer"
            onClick={() => scrollToSection("home")}
        >
          Shriya
        </h1>

        <div className="flex gap-6 text-gray-300">
          <button onClick={() => scrollToSection("home")} className="hover:text-white">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-white">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-white">
            Projects
          </button>
          <button onClick={() => scrollToSection("contacts")} className="hover:text-white">
            Contact
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;