import React from "react";
import { SlArrowRight } from "react-icons/sl";
import aboutImage from "../assets/about-croped.png"; // Ensure correct path

const About = () => {
  return (
    <section id="AboutMe" className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-12">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img src={aboutImage} alt="About Me" className="w-64 md:w-80 rounded-lg shadow-lg" />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am a passionate software developer with a strong analytical mindset, currently working as a <strong>Software Developer at GlobalXperts</strong>.
          I specialize in full-stack web and mobile development, with expertise in 
          <strong> React, React Native, Node.js, Express.js, and MongoDB</strong>.
          My solid grasp of <strong>data structures and algorithms in Java</strong> allows me to write optimized and efficient code.  
          I hold a <strong>B.Tech in Computer Science</strong> from <strong>Sushila Devi Bansal College of Engineering</strong>, 
          where I honed my problem-solving skills and built a strong foundation in software development.
        </p>

        {/* Key Aspects Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Key Aspects</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-lg text-gray-700">
              <SlArrowRight className="text-blue-600 mr-2" /> <strong>Full-Stack Developer</strong>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <SlArrowRight className="text-blue-600 mr-2" /> <strong>DSA Problem Solver (Java)</strong>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <SlArrowRight className="text-blue-600 mr-2" /> <strong>Building RESTful APIs</strong>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <SlArrowRight className="text-blue-600 mr-2" /> <strong>Database Management</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
