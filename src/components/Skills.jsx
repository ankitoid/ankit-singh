import React from "react";
import frontend from "../assets/frontend.png";
import uiux from "../assets/ui-ux.png";
import devops from "../assets/devops.png";

const skills = [
  {
    id: "1",
    src: frontend,
    title: "Front-End Development",
    description: "Expertise in building responsive and user-friendly interfaces using React.js, JavaScript, and Tailwind.",
  },
  {
    id: "2",
    src: uiux,
    title: "UI & UX Design",
    description: "Passionate about designing intuitive user experiences with Figma, Adobe XD, and modern UI frameworks.",
  },
  {
    id: "3",
    src: devops,
    title: "DevOps & Cloud Deployment",
    description: "Hands-on experience with AWS, Docker, Kubernetes, and CI/CD pipelines for seamless deployment.",
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 py-4 text-black" id="Myskills">
      <h2 className="text-center text-4xl font-bold mb-8 text-white">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white rounded-lg p-6 text-center shadow-lg w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={skill.src} alt={skill.title} className="w-20 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;