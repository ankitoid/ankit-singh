import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (target) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="fixed left-0 right-0  py-4 px-6 flex justify-between items-center z-50 bg-[#111010] bg-opacity-50 backdrop-blur-lg">
      {/* Logo */}
      <div
        className="text-xl font-bold  dark:text-white cursor-pointer"
        onClick={() => handleNavigation("heroSection")}
      >
        <h1 className="flex justify-center gap-1">
          <svg
            width="28"
            height="28"
            viewBox="0 0 82 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_151_48)">
              <path
                d="M25.96 75.05C19.85 75.05 12.81 69.42 3.17004 57.03C-0.99996 51.67 -1.06996 44.49 3.00004 39.17C5.08004 36.45 12.83 28.72 30.57 34.13C30.93 26.97 31.39 19.83 32.57 14.18C34.52 4.78001 38.61 0.0100098 44.72 0.0100098C58.51 0.0100098 73.05 21 78.53 35.18C82.7 45.97 82.5 53.86 77.95 58C73.81 61.76 67.29 61.46 58.57 57.1C47.84 51.73 44.1 49.95 39.47 47.95C38.56 61.49 36.63 72.16 28.96 74.59C27.98 74.9 26.98 75.06 25.96 75.06V75.05ZM19.11 41.87C14.78 41.87 11.97 43.24 10.63 45C9.23004 46.83 9.27004 49.24 10.75 51.13C22.17 65.81 26.03 65.43 26.08 65.42C26.08 65.42 27.66 64.46 28.84 57.28C29.46 53.48 29.82 48.86 30.09 44.08C25.72 42.5 22.07 41.87 19.12 41.87H19.11ZM62.86 48.51C69.53 51.84 71.47 50.9 71.49 50.89C72.08 50.3 72.63 46.01 69.1 37.46C63.19 23.14 51.34 9.61001 44.71 9.61001C44.43 9.61001 43.08 10.77 41.96 16.13C40.77 21.88 40.37 29.93 40 37.76C46.61 40.53 49.56 41.87 62.85 48.52L62.86 48.51Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_151_48">
                <rect width="81.52" height="75.05" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Ankit
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="lg:hidden cursor-pointer text-blue-600 dark:text-white"
        onClick={toggleNav}
      >
        {navActive ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navbar Links */}
      <div
        className={`lg:flex lg:items-center lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white  lg:bg-transparent transition-all duration-300 ${
          navActive
            ? "flex flex-col items-center gap-6 py-6 shadow-md transition-all transform -translate-y-0 duration-500"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 text-sm font-medium text-black md:text-white dark:text-white">
          <li>
            <span
              onClick={() => handleNavigation("heroSection")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Home
            </span>
          </li>
          <li>
            <RouterLink
              to="/about"
              onClick={closeMenu}
              className="hover:text-blue-600"
            >
              About Me
            </RouterLink>
          </li>

          <li>
            <ScrollLink
              to="Myskills"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-600"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="MyExperience"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-600"
            >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="MyProjects"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-600"
            >
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
        className="hidden text-sm lg:inline-block p-3 bg-[#155DFC] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        onClick={closeMenu}
      >
        Contact Me
      </ScrollLink>
    </nav>
  );
};

export default Navbar;
