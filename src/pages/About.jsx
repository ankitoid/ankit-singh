import React from "react";
import { SlArrowRight } from "react-icons/sl";
import aboutImage from "../assets/about-croped.png"; 
import Education from "./Education";
import Navbar from "../components/Navbar";

const About = () => {
  return (
   <>
    <Navbar />
    <section
      id="AboutMe"
      className="bg-[#111010] flex flex-col md:flex-row items-center gap-10 p-16 "
    >
      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          src={aboutImage}
          alt="About Me"
          className="w-64 md:w-80 rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-2/3"> 
        <h1 className="text-2xl font-bold  mb-4 text-white">About Me</h1>
        <p className="text-md text-white leading-relaxed">
          I am a passionate software developer with a strong analytical mindset,
          currently working as a{" "}
          <strong>Software Developer at GlobalXperts</strong>. I specialize in{" "}
          <strong>full-stack web development</strong>, with expertise in{" "}
          <strong>React, Node.js, Express.js, and MongoDB</strong>.
          Additionally, I have a strong grasp of{" "}
          <strong>DevOps practices</strong>, including{" "}
          <strong>
            Docker, Kubernetes, AWS, CI/CD pipelines, and infrastructure
            automation
          </strong>
          . My problem-solving abilities and deep understanding of{" "}
          <strong>data structures and algorithms in Java</strong> enable me to
          write optimized and scalable code. I thrive on building efficient,
          high-performance applications and continuously learning new
          technologies to stay ahead in the industry.
        </p>

        {/* Key Aspects Section */}
        <div className="mt-6">
          <h3 className="text-md font-semibold text-white mb-3">Key Aspects</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-md text-white">
              <SlArrowRight className="text-blue-600 mr-2" />{" "}
              <strong>
                Full-Stack Web Development (React, Node.js, Express, MongoDB)
              </strong>
            </li>
            <li className="flex items-center text-md text-white">
              <SlArrowRight className="text-blue-600 mr-2" />{" "}
              <strong>
                DevOps & Cloud (AWS, Docker, Kubernetes, CI/CD, Infrastructure
                Automation)
              </strong>
            </li>
            <li className="flex items-center text-md text-white">
              <SlArrowRight className="text-blue-600 mr-2" />{" "}
              <strong>
                Optimized & Scalable Code (Data Structures & Algorithms in Java)
              </strong>
            </li>
            <li className="flex items-center text-md text-white">
              <SlArrowRight className="text-blue-600 mr-2" />{" "}
              <strong>Building High-Performance RESTful APIs</strong>
            </li>
            <li className="flex items-center text-md text-white">
              <SlArrowRight className="text-blue-600 mr-2" />{" "}
              <strong>Database Management & Optimization</strong>
            </li>
            <li className="flex items-center text-md text-white">
              <SlArrowRight className="text-blue-600 mr-2" />{" "}
              <strong>Continuous Learning & Problem-Solving</strong>
            </li>
          </ul>
        </div>
      </div>
     
    </section>
    <Education/>
    </>
  );
};

export default About;
