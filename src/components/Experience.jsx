import React from "react";
import { useInView } from "../hooks";

const EXPERIENCES = [
  {
    company: "GlobalXperts.net",
    role: "Software Developer",
    duration: "January 2025 – Present",
    badge: "Full-time",
    points: [
      "Developed high-performance full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated on all stages of development and worked with CI/CD pipelines, Docker, and AWS services.",
      "Implemented DevOps best practices including infrastructure automation with Jenkins and AWS.",
      "Led frontend performance optimization reducing page load times by 40%.",
    ],
  },
  {
    company: "GlobalXperts.net",
    role: "Software Developer Trainee",
    duration: "July 2024 – December 2024",
    badge: "Trainee",
    points: [
      "Built scalable web solutions using the MERN stack and optimized front-end interfaces with React.js.",
      "Assisted in implementing DevOps practices including automation with Jenkins and Docker containerization.",
      "Worked with AWS services such as EC2, S3, and Lambda to enhance application scalability.",
      "Delivered 3 production features independently within the first two months.",
    ],
  },
  {
    company: "Yhills",
    role: "Web Development Intern",
    duration: "September 2022 – October 2022",
    badge: "Internship",
    points: [
      "Developed a visually appealing portfolio website using HTML, CSS, and JavaScript.",
      "Contributed to an e-commerce platform with innovative features and responsive design.",
      "Gained hands-on experience with modern web development workflows and version control.",
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView();

  return (
    <section id="MyExperience" className="section" ref={ref}>
      <div className="section-inner">
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>Career</div>
        <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
          Work <span>Experience</span>
        </h2>

        <div className="exp-timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className={`exp-item fade-up ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="exp-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-duration">⏱ {exp.duration}</div>
                  </div>
                  <span className="exp-badge">{exp.badge}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;