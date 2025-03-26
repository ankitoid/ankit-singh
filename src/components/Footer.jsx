import { Link } from "react-scroll";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#111010] text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 ">
            <Link to="heroSection" smooth={true} offset={-70} className="cursor-pointer ">
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
          </svg>Ankit
        </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 text-lg">
            <li>
              <ScrollLink to="heroSection" smooth={true} offset={-70} className="hover:text-blue-400 cursor-pointer">
                Home
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/about" className="hover:text-blue-400">
                About Me
              </RouterLink>
            </li>
            <li>
              <ScrollLink to="Myskills" smooth={true} offset={-70} className="hover:text-blue-400 cursor-pointer">
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="MyExperience" smooth={true} offset={-70} className="hover:text-blue-400 cursor-pointer">
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="MyProjects" smooth={true} offset={-70} className="hover:text-blue-400 cursor-pointer">
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} offset={-70} className="hover:text-blue-400 cursor-pointer">
                Contact Me
              </ScrollLink>
            </li>
          </ul>


          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            {[
              { href: "https://api.whatsapp.com/send?phone=916265227382", icon: BsWhatsapp },
              { href: "https://x.com/ankit_thakur12", icon: BsTwitter },
              { href: "https://www.facebook.com/ankitoid", icon: BsFacebook },
              { href: "https://www.instagram.com/ankit.__.thakur/", icon: BsInstagram },
            ].map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Made By */}
          <p className="text-md font-medium text-gray-400">Made with 💜 by Ankit</p>

          {/* Contact Information */}
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-400 text-lg">
            <li className="flex items-center gap-2">
              <CiLocationOn className="text-blue-400 text-md" />
              <a
                href="https://www.google.com/maps/@28.5415911,77.2895358,13z?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <strong>Noida, Uttar Pradesh, India 201317</strong>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineMail className="text-blue-400 text-md" />
              <a
                href="mailto:ankitsinghghoshi1234@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <strong>ankitsinghghoshi1234@gmail.com</strong>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <BsPhone className="text-blue-400 text-md" />
              <a
                href="tel:6265227382"
                className="hover:text-blue-400 transition-colors"
              >
                <strong>+91 6265227382</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


