import React from "react";
import frontend from "../assets/frontend.png";
import uiux from "../assets/ui-ux.png";
import devops from "../assets/devops.png";

const SkillCard = ({ src, title, description, bgColor }) => {
  return (
    <div
      className="rounded-[12px] border-[0.8px] shadow-lg transform transition duration-300 hover:bg-[#75A0EE] hover:shadow-md flex flex-col cursor-pointer "
      style={{
        width: "320px",
        height: "400px",
        gap: "10px",
        padding: "25px 30px",
        backgroundColor: "#16233C",
      }}
    >
      <div className="flex justify-center ">
        <img src={src} alt={title} className="w-36 mt-8" />
      </div>
      <div className="flex flex-col justify-end flex-grow">
        <h3 className="text-3xl text-white font-semibold mb-2 text-left transition duration-300 hover:text-white">
          {title}
        </h3>
        <p className="text-white text-sm text-left transition duration-300 hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      className=" max-w-7xl mx-auto  bg-[#111010]"
      id="Myskills"
    >
      <h2 className="text-center text-3xl font-bold mb-10 text-white">
        Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {/* Frontend Skill Box */}
        <SkillCard
          src={frontend}
          title="Front-End Development"
          description="Expertise in building responsive and user-friendly interfaces using React.js, JavaScript, and Tailwind."
          bgColor="#16233C"
        />

        {/* UI/UX Skill Box */}
        <SkillCard
          src={uiux}
          title="UI & UX Design"
          description="Passionate about designing intuitive user experiences with Figma, Adobe XD, and modern UI frameworks."
          bgColor=" #16233C"
        />

        {/* DevOps Skill Box */}
        <SkillCard
          src={devops}
          title="DevOps & Cloud Deployment"
          description="Hands-on experience with AWS, Docker, Kubernetes, and CI/CD pipelines for seamless deployment."
          bgColor="#16233C"
        />
      </div>
    </section>
  );
};

export default Skills;
