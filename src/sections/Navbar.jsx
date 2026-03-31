import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

    setOpen(false); 
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contacts", id: "contacts" }, 
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1
          className="text-gray-500 font-bold text-2xl cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Shriya
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300 text-base md:text-md lg:text-2xl">          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white text-1xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 text-gray-300 text-base md:text-md lg:text-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;