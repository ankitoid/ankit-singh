import React from "react";
import heroImg from "../assets/ankitimg.jpg";
import {
  SiGeeksforgeeks,
  SiGithub,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";
import cmpter from "../assets/cmptdy.png";

const Hero = () => {
  const svgBackground = `data:image/svg+xml,%3Csvg width='82' height='76' viewBox='0 0 82 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_151_48)'%3E%3Cpath d='M25.96 75.05C19.85 75.05 12.81 69.42 3.17004 57.03C-0.99996 51.67 -1.06996 44.49 3.00004 39.17C5.08004 36.45 12.83 28.72 30.57 34.13C30.93 26.97 31.39 19.83 32.57 14.18C34.52 4.78001 38.61 0.0100098 44.72 0.0100098C58.51 0.0100098 73.05 21 78.53 35.18C82.7 45.97 82.5 53.86 77.95 58C73.81 61.76 67.29 61.46 58.57 57.1C47.84 51.73 44.1 49.95 39.47 47.95C38.56 61.49 36.63 72.16 28.96 74.59C27.98 74.9 26.98 75.06 25.96 75.06V75.05Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_151_48'%3E%3Crect width='81.52' height='75.05' fill='black'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E`;

  return (
    <div
      className="relative flex items-center justify-between h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url("${svgBackground}")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Left Content */}
      <div className="max-w-lg p-20 ">
        <img src={cmpter} className="w-14 h-14" alt="Icon" />
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold text-gray-300 mt-4 mb-2">
            Code. Build. Solve.
          </h1>
        </div>
        <h2 className="text-xl text-blue-500 mt-2 font-bold mb-2">
          I'm a Full Stack Software Engineer
        </h2>
        <p className="text-gray-400 mt-2 mb-2">
          Hey there, I’m Ankit Singh Ghosh, software developer at GlobalXperts.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/ankitoid/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin size={30} className="hover:text-blue-500 transition" />
          </a>
          <a
            href="https://github.com/ankitoid/"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size={30} className="hover:text-gray-400 transition" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/ankitoid/"
            target="_blank"
            rel="noreferrer"
          >
            <SiGeeksforgeeks
              size={30}
              className="hover:text-green-500 transition"
            />
          </a>
          <a
            href="https://leetcode.com/ankitoid/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode
              size={30}
              className="hover:text-yellow-500 transition"
            />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 ">
          <button
            className="bg-[#155DFC]l px-5 py-2 text-white rounded-lg hover:bg-blue-700 bg-blue-700"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1AKDE65IXTJmkKnBJX7B3h0IzopUkyyzR/view?usp=sharing",
                "_blank"
              )
            }
          >
            Get resume
          </button>

          <button className="text-gray-300 hover:underline">
            See projects
          </button>
        </div>
      </div>

      {/* Right Side Image with Custom Shape */}
      <div className="relative mt-10 md:mt-4 p-20 ">
        <img
          src={heroImg}
          alt="Profile"
          className=" w-[370px] h-[380px]  border-t-0 border-r-0 border-l-12 border-b-12 border-[#155DFC] object-cover"
          style={{
            borderTopLeftRadius: "550px",
            borderTopRightRadius: "550px",
            borderBottomRightRadius: "550px",
          }}
        />
      </div>
      
    </div>
    
  );
};

export default Hero;


