import React from "react";
import frontend from "../assets/frontend.png";
import uiux from "../assets/ui-ux.png";
import devops from "../assets/devops.png";

const SkillCard = ({ src, title, description, bgColor }) => {
  return (
    <div
      className="rounded-[12px] border-[0.8px] shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
      style={{
        width: "300px",
        height: "300px",
        gap: "10px",
        padding: "20px 30px",
        backgroundColor: bgColor || "#ffffff",
      }}
    >
      <div className="flex justify-center">
        <img src={src} alt={title} className="w-28 mb-4" />
      </div>
      <div className="flex flex-col justify-end flex-grow">
        <h3 className="text-3xl font-semibold mb-2 text-left">{title}</h3>
        <p className="text-gray-600 text-sm text-left">{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="w-full h-[779px]bg-gray-900 py-8 text-black" id="Myskills">
      <h2 className="text-center text-3xl font-bold mb-10 text-white">Services</h2>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {/* Frontend Skill Box */}
        <SkillCard
          src={frontend}
          title="Front-End Development"
          description="Expertise in building responsive and user-friendly interfaces using React.js, JavaScript, and Tailwind."
          bgColor="#FFEBE8"
        />

        {/* UI/UX Skill Box */}
        <SkillCard
          src={uiux}
          title="UI & UX Design"
          description="Passionate about designing intuitive user experiences with Figma, Adobe XD, and modern UI frameworks."
          bgColor="#E8F4FF"
        />

        {/* DevOps Skill Box */}
        <SkillCard
          src={devops}
          title="DevOps & Cloud Deployment"
          description="Hands-on experience with AWS, Docker, Kubernetes, and CI/CD pipelines for seamless deployment."
          bgColor="#E8FFE8"
        />
      </div>
    </section>
  );
};

export default Skills;
