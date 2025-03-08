import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";  // Use react-scroll for smooth scrolling
import { Link as RouterLink } from "react-router-dom"; // Use react-router-dom for page navigation
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logoAnkit.png"; // Ensure correct path

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md py-4 px-6 flex justify-between items-center z-50 dark:bg-gray-900">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 dark:text-white">
        <ScrollLink to="heroSection"  smooth={true} offset={-70} duration={500} className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-auto h-9" />
        </ScrollLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden cursor-pointer text-blue-600 dark:text-white" onClick={toggleNav}>
        {navActive ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navbar Links */}
      <div
        className={`lg:flex lg:items-center lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white dark:bg-gray-900 lg:bg-transparent transition-all duration-300 ${
          navActive ? "flex flex-col items-center gap-6 py-6 shadow-md" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 text-lg font-medium text-white dark:text-white">
          <li>
            <ScrollLink to="heroSection"  smooth={true} offset={-70} duration={500} onClick={closeMenu} className="hover:text-blue-600 cursor-pointer">
              Home
            </ScrollLink>
          </li>
          <li>
            <RouterLink to="/about" onClick={closeMenu} className="hover:text-blue-600">
              About Me
            </RouterLink>
          </li>
          <li>
            <ScrollLink to="MyExperience" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-600">
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="Myskills" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-600">
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="MyProjects" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-600">
              Projects
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* Contact Button */}
      <ScrollLink
        to="contact"
        smooth={true}
        offset={-70}
        duration={500}
        className="hidden lg:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        onClick={closeMenu}
      >
        Contact Me
      </ScrollLink>
    </nav>
  );
};

export default Navbar;
