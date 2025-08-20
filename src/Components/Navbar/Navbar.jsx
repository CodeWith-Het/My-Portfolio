import React from "react";

const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className=" text-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-indigo-400 hover:text-indigo-300 cursor-pointer">
          MyPortfolio
        </h1>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer group"
            >
              <span className="hover:text-indigo-400 transition duration-300">
                {item}
              </span>
              {/* Underline Effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
