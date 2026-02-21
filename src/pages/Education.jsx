import React from "react";
import { useInView } from "../hooks";

const EDU_DATA = [
  {
    course: "B.Tech (Computer Science & Engineering)",
    institute: "Sushila Devi Bansal College of Engineering, Indore",
    session: "2020–2024",
    grade: "7.77 CGPA",
  },
  {
    course: "Intermediate — MP Board",
    institute: "Govt Higher Secondary School, Chhatarpur",
    session: "2019–2020",
    grade: "75.8%",
  },
  {
    course: "Matriculation — MP Board",
    institute: "Dr. K. N. Memorial Higher Secondary School, Chhatarpur",
    session: "2017–2018",
    grade: "78.2%",
  },
];

const TRAINING_DATA = [
  {
    name: "Java 2.0",
    duration: "Feb–Jun 2022",
    institute: "Universal Informatics, Indore",
    desc: "Full-stack dynamic web application development using Java technology stack.",
  },
  {
    name: "Programming Basics",
    duration: "Jan–Mar 2022",
    institute: "IIT Bhopal",
    desc: "RPA automation using UiPath Studio to automate repetitive, rule-based tasks.",
  },
  {
    name: "TCS-ION Career Edge",
    duration: "Sep–Oct 2022",
    institute: "TCS ION Learning Hub",
    desc: "Communication, presentation, soft skills, business etiquette, and IT fundamentals.",
  },
];

const Education = () => {
  const [ref, inView] = useInView();

  return (
    <section id="myEducation" className="section" ref={ref}>
      <div className="section-inner">
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>Credentials</div>
        <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
          Education &amp; <span>Training</span>
        </h2>

        <div className="edu-grid">
          {/* Education */}
          <div className={`fade-up fade-up-d2 ${inView ? "visible" : ""}`}>
            <div className="edu-col-title">🎓 Education</div>
            {EDU_DATA.map((e, i) => (
              <div key={i} className="edu-item" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="edu-course">{e.course}</div>
                <div className="edu-institute">{e.institute}</div>
                <div className="edu-meta">
                  <span className="edu-session">{e.session}</span>
                  <span className="edu-grade">{e.grade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Training */}
          <div className={`fade-up fade-up-d3 ${inView ? "visible" : ""}`}>
            <div className="edu-col-title">🏆 Training</div>
            {TRAINING_DATA.map((t, i) => (
              <div key={i} className="edu-item" style={{ transitionDelay: `${(i + 3) * 0.1}s` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <div className="edu-course">{t.name}</div>
                  <span className="edu-session">{t.duration}</span>
                </div>
                <div className="edu-institute">{t.institute}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text2)", marginTop: 6, lineHeight: 1.6 }}>
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;