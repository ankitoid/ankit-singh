import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cpp from "../assets/Languages/cpp.png";
import js from "../assets/Languages/js.png";
import nodejs from "../assets/Languages/nodejs.png";
import react from "../assets/Languages/react.png";
import redux from "../assets/Languages/redux.png";
import express from "../assets/Languages/express.png";
import mongodb from "../assets/Languages/mongodb.png";
import mysql from "../assets/Languages/mysql.png";
import git from "../assets/Languages/git.png";
import github from "../assets/Languages/github.png";
import jenkins from "../assets/Languages/jenkins.png";
import docker from "../assets/Languages/docker.png";
import aws from "../assets/Languages/aws.png";
import k8 from "../assets/Languages/k8.png";
import tailwind from "../assets/Languages/taliwind.png";

const skilldata = [
  { src: cpp, title: "C++", description: "C++ is a powerful, high-performance programming language widely used for system/software development, game development, and real-time applications." },
  { src: js, title: "JavaScript", description: "JavaScript is a versatile programming language primarily used for web development to create dynamic and interactive web applications." },
  { src: nodejs, title: "Node.js", description: "Node.js is a runtime environment that allows developers to run JavaScript on the server, enabling backend development with high scalability and performance." },
  { src: react, title: "React", description: "React is a popular JavaScript library for building user interfaces, particularly for single-page applications with a component-based architecture." },
  { src: redux, title: "Redux", description: "Redux is a state management library for JavaScript applications, often used with React to manage application state in a predictable manner." },
  { src: express, title: "Express.js", description: "Express.js is a minimal and flexible Node.js web application framework that provides a set of features for building APIs and web applications." },
  { src: mongodb, title: "MongoDB", description: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format, making it ideal for scalable and high-performance applications." },
  { src: mysql, title: "MySQL", description: "MySQL is a widely-used open-source relational database management system known for its reliability, scalability, and structured query language (SQL)." },
  { src: git, title: "Git", description: "Git is a distributed version control system that helps developers track changes in code, collaborate effectively, and manage software development projects." },
  { src: github, title: "GitHub", description: "GitHub is a web-based platform for version control and collaborative software development using Git, providing repositories, issue tracking, and CI/CD integrations." },
  { src: jenkins, title: "Jenkins", description: "Jenkins is an open-source automation server used for continuous integration and continuous deployment (CI/CD) in software development pipelines." },
  { src: docker, title: "Docker", description: "Docker is a platform for developing, shipping, and running applications in lightweight, portable containers, ensuring consistency across environments." },
  { src: aws, title: "AWS", description: "Amazon Web Services (AWS) is a comprehensive cloud computing platform providing on-demand infrastructure, storage, databases, and AI services." },
  { src: k8, title: "Kubernetes", description: "Kubernetes is an open-source container orchestration system that automates the deployment, scaling, and management of containerized applications." },
  { src: tailwind, title: "Tailwind CSS", description: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with a flexible and responsive design system." }
];

const TechSkills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 400);
  }, []);

  return (
    <section id="tech-skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: animate ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {skilldata.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-4 ">
              <img src={item.src} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechSkills;