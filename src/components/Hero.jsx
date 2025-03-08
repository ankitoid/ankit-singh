import React from "react";
import heroImg from "../assets/ankit-croped.png";
import { Typewriter } from "react-simple-typewriter";
import { SiGeeksforgeeks, SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

const Hero = () => {
  return (
    <section id="heroSection" className="bg-gray-900 text-white py-20 px-10 flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col gap-6 p-12">
        <p className="text-lg text-gray-400">Hello 👋, I'm</p>
        <h1 className="text-5xl font-bold text-white">
          <span className="text-blue-400 tx">Ankit Singh Ghosh</span>
        </h1>
        <p className="text-lg text-gray-300">Software Developer at GlobalXperts</p>

        <h3 className="text-xl font-semibold">
          I am{" "}
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "React Developer",
              "DevOps Enthusiast",
              "React Native Developer",
              "JavaScript Enthusiast",
              "Android Developer",
            ]}
            loop={Infinity}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            cursor
            cursorStyle="|"
          />
        </h3>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/ankitoid/" target="_blank" rel="noreferrer">
            <SiLinkedin size={30} className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/ankitoid/" target="_blank" rel="noreferrer">
            <SiGithub size={30} className="hover:text-gray-400 transition" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/ankitoid/" target="_blank" rel="noreferrer">
            <SiGeeksforgeeks size={30} className="hover:text-green-500 transition" />
          </a>
          <a href="https://leetcode.com/ankitoid/" target="_blank" rel="noreferrer">
            <SiLeetcode size={30} className="hover:text-yellow-500 transition" />
          </a>
        </div>

        {/* Resume Button */}
        <button
          className="mt-6 px-16 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition"
          onClick={() =>
            window.open("https://drive.google.com/file/d/1iVjPEmuNgtYAHYHh0YFU7apkpCwB3sT_/view?usp=sharing", "_blank")
          }
        >
          Get Resume
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img src={heroImg} alt="Ankit Singh Ghosh" className="rounded-xl shadow-lg w-80 md:w-[400px]" />
      </div>
    </section>
  );
};

export default Hero;
