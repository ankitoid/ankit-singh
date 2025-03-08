import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "GlobalXperts.net",
    role: "Software Developer",
    duration: "January 2025 - Present",
    location: "On-site",
    description: [
      "Developed a high-performance, responsive full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated on all stages of development and worked with CI/CD pipelines, Docker, and AWS services to optimize deployment and scalability.",
      "Implemented DevOps best practices, including infrastructure automation using Jenkins and AWS.",
    ],
  },
  {
    id: 2,
    company: "GlobalXperts.net",
    role: "Software Developer Trainee",
    duration: "July 2024 - December 2024",
    location: "On-site",
    description: [
      "Built scalable web solutions using the MERN stack and optimized front-end interfaces with React.js.",
      "Assisted in implementing DevOps practices, including automation with Jenkins and containerization using Docker.",
      "Worked with AWS services such as EC2, S3, and Lambda to enhance application scalability.",
    ],
  },
  {
    id: 3,
    company: "Yhills",
    role: "Web Development Intern",
    duration: "September 2022 - October 2022",
    location: "Online",
    description: [
      "Developed a visually appealing portfolio website and contributed to an e-commerce platform with innovative features.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="MyExperience" className=" bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Experience</h2>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white p-6 mb-10 shadow-lg rounded-lg"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-5 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

              {/* Experience Content */}
              <h3 className="text-2xl font-semibold text-blue-600">{exp.role}</h3>
              <p className="text-lg font-medium text-gray-700">{exp.company} | {exp.duration}</p>
              <p className="text-gray-600 italic">{exp.location}</p>
              <ul className="mt-4 space-y-2">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="text-gray-700 text-md leading-relaxed flex items-start">
                    <span className="mr-2 text-blue-500">•</span> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
