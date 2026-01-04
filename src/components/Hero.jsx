import React from "react";
import heroImg from "../assets/ankitimg.jpg";
import {
  SiGeeksforgeeks,
  SiGithub,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";
import cmpter from "../assets/cmptDy.png";
import vector from "../assets/Vector.jpg";
import Navbar from "./Navbar";
const Hero = () => {
  const svgBackground1 = { vector };

  return (
    <>
      <Navbar />
      <div
        className="bg-[#111010] relative flex items-center justify-between h-screen bg-cover bg-center 2xl:max-w-7xl 2xl:mx-auto"
        style={{
          backgroundImage: `url("${svgBackground1}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col-reverse md:flex-row md:gap-44 items-center justify-between min-h-screen 2xl:max-w-7xl 2xl:mx-auto px-6 py-12 md:p-20 mt-48 md:mt-0">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <img
              src={cmpter}
              className="w-14 h-14 mx-auto md:mx-0"
              alt="Icon"
            />
            <h1 className="text-4xl font-bold text-gray-300 mt-4 mb-2">
              Code. Build. Solve.1234
            </h1>
            <h2 className="text-xl text-blue-500 mt-2 font-bold mb-2">
              I'm a Full Stack Software Engineer
            </h2>
            <p className="text-gray-400 mt-2 mb-2">
              Hey there, I’m Ankit Singh Ghosh, software developer at
              GlobalXperts.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-10 mt-4">
              <a
                href="https://www.linkedin.com/in/ankitoid/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin
                  size={30}
                  className="hover:text-blue-500 transition"
                />
              </a>
              <a
                href="https://github.com/ankitoid/"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub
                  size={30}
                  className="hover:text-gray-400 transition"
                />
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
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:mb-10">
              <button
                className="bg-blue-700 px-5 py-2 text-white rounded-lg hover:bg-blue-800"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1AKDE65IXTJmkKnBJX7B3h0IzopUkyyzR/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Get resume
              </button>

              <button className="text-gray-300 hover:underline ">
                See projects
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 mt-8 md:mb-0">
            <img
              src={heroImg}
              alt="Profile"
              className="w-[300px] h-[300px] md:w-[370px] md:h-[380px] object-cover border-b-8 border-l-8 border-blue-700"
              style={{
                borderTopLeftRadius: "550px",
                borderTopRightRadius: "550px",
                borderBottomRightRadius: "550px",
              }}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
