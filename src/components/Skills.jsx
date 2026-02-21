import React from "react";
import { useInView } from "../hooks";
import frontend from "../assets/frontend.png";
import uiux from "../assets/ui-ux.png";
import devops from "../assets/devops.png";

const SERVICES = [
  {
    src: frontend,
    icon: "⚛️",
    title: "Front-End Development",
    desc: "Crafting pixel-perfect, responsive interfaces using React.js, Tailwind CSS, and modern animation libraries for exceptional UX.",
    num: "01",
  },
  {
    src: uiux,
    icon: "🎨",
    title: "UI & UX Design",
    desc: "Designing intuitive, user-centered experiences with Figma — from wireframes to high-fidelity prototypes that convert.",
    num: "02",
  },
  {
    src: devops,
    icon: "☁️",
    title: "DevOps & Cloud",
    desc: "End-to-end deployment pipelines with AWS, Docker, Kubernetes, and Jenkins. Infrastructure as code. Zero-downtime deployments.",
    num: "03",
  },
];

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <section id="Myskills" className="section" ref={ref}>
      <div className="section-inner">
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>What I Do</div>
        <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
          My <span>Services</span>
        </h2>
        <div className="services-grid">
          {SERVICES.map((c, i) => (
            <div
              key={i}
              className={`service-card fade-up fade-up-d${i + 1} ${inView ? "visible" : ""}`}
            >
              <div className="service-number">{c.num}</div>
              <div className="service-icon">
                {c.src ? (
                  <img src={c.src} alt={c.title} style={{ width: 36, height: 36, objectFit: "contain" }} />
                ) : (
                  c.icon
                )}
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;