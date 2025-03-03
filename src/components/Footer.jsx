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
import logo from "../assets/logoAnkit.png"; // Ensure correct path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <Link to="heroSection" smooth={true} offset={-70} className="cursor-pointer">
              <img
                src={logo}
                alt="Logo"
                className="w-36 md:w-44 transition-transform transform hover:scale-110"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 text-lg">
            {[
              { name: "Projects", to: "MyPortfolio" },
              { name: "Education", to: "myEducation" },
              { name: "Skillset", to: "testimonial" },
              { name: "About Me", to: "AboutMe" },
              { name: "Contact Me", to: "Contact" },
            ].map((item, index) => (
              <li key={index} className="hover:text-blue-400 transition-colors duration-300">
                <Link to={item.to} smooth={true} offset={-70} duration={500}>
                  {item.name}
                </Link>
              </li>
            ))}
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
          <p className="text-lg font-medium text-gray-400">Made with 💜 by Ankit</p>

          {/* Contact Information */}
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-400 text-lg">
            <li className="flex items-center gap-2">
              <CiLocationOn className="text-blue-400 text-2xl" />
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
              <AiOutlineMail className="text-blue-400 text-2xl" />
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
              <BsPhone className="text-blue-400 text-2xl" />
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
