import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-8 py-4">
        <h1
          className={`text-2xl font-bold cursor-pointer transition-colors duration-500 ${
            scrolled ? "text-indigo-600" : "text-white"
          }`}
        >
          Het Patel
        </h1>
        <ul
          className={`flex space-x-8 font-medium transition-colors duration-500 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <li className="relative cursor-pointer group">
            <span className="hover:text-indigo-600 transition duration-300">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-700 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="hover:text-indigo-600 transition duration-300">About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-700 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="hover:text-indigo-600 transition duration-300">Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-700 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="hover:text-indigo-600 transition duration-300">Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-700 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="hover:text-indigo-600 transition duration-300">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-700 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
