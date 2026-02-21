import React from "react";
import { useInView } from "../hooks";
import homestay from "../assets/homestay.png";
import helloworld from "../assets/helloworld.png";
import taskmanager from "../assets/taskmanager.png";

const PROJECTS = [
  {
    src: homestay,
    title: "Excellence Study",
    tag: "Full Stack",
    desc: "Family homestay platform supporting authentic accommodation for students. Built with React, Next.js, and GraphQL with Hashnode blog integration.",
    techs: ["React", "Next.js", "GraphQL"],
    link: "https://github.com/ankitoid/Excellence-Study",
  },
  {
    src: helloworld,
    title: "Hello World!",
    tag: "Social App",
    desc: "Full-stack social media web app with user auth, post creation, likes, follow/unfollow. React + Redux for state management with JWT authentication.",
    techs: ["React", "Redux", "JWT"],
    link: "https://github.com/ankitoid/Hello-World",
  },
  {
    src: taskmanager,
    title: "Fitness Club",
    tag: "MERN Stack",
    desc: "Full-stack fitness management platform with comprehensive CRUD operations, workout planning, and GYM membership management capabilities.",
    techs: ["MongoDB", "Express", "React"],
    link: "https://github.com/ankitoid/FitnessClub/tree/main",
  },
];

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section id="MyProjects" className="section" style={{ background: "var(--bg2)" }} ref={ref}>
      <div className="section-inner">
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div className={`section-label fade-up ${inView ? "visible" : ""}`}>Portfolio</div>
            <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`} style={{ marginBottom: 0 }}>
              Featured <span>Projects</span>
            </h2>
          </div>
          <button
            className={`btn-primary fade-up ${inView ? "visible" : ""}`}
            onClick={() => window.open("https://github.com/ankitoid", "_blank")}
          >
            View All on GitHub →
          </button>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className={`project-card fade-up fade-up-d${i + 1} ${inView ? "visible" : ""}`}
            >
              <div className="project-img">
                <img src={p.src} alt={p.title} />
                <div className="project-img-overlay" />
                <div className="project-tag">{p.tag}</div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-footer">
                  <div className="project-techs">
                    {p.techs.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;