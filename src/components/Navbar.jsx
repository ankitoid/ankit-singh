import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-6 flex justify-between items-center z-50 dark:bg-gray-900">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 dark:text-white">
        <Link to="heroSection" smooth={true} offset={-70} className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-auto h-9" /> 
        </Link>
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
        <ul className="flex flex-col lg:flex-row gap-6 text-lg font-medium text-gray-800 dark:text-white">
          <li>
            <Link to="MyPortfolio" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link to="myEducation" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="hover:text-blue-600">
              Education
            </Link>
          </li>
          <li>
            <Link to="MyExperience" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="hover:text-blue-600">
              Experience
            </Link>
          </li>
          <li>
            <Link to="AboutMe" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="hover:text-blue-600">
              About Me
            </Link>
          </li>
          <li>
            <Link to="testimonial" smooth={true} offset={-70} duration={500} onClick={closeMenu} className="hover:text-blue-600">
              Skillset
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Button */}
      <Link
        to="Contact"
        smooth={true}
        offset={-70}
        duration={500}
        className="hidden lg:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        onClick={closeMenu}
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
