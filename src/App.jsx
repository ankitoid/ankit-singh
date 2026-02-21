import { useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

// Components
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import TechSkills from "./components/TechSkills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/scrollToTop";

// Pages (used as inline sections on homepage)
import Blog from "./pages/Blog";
import Education from "./pages/Education";

// The About section is a standalone /about route — see your router setup.
// For the homepage inline version, we inline the about section here:
import { useInView } from "./hooks";
import { SlArrowRight } from "react-icons/sl";
import Achievements from "./components/Achievements";

const ASPECTS = [
  "Full-Stack Web Development (React, Node.js, Express, MongoDB)",
  "DevOps & Cloud (AWS, Docker, Kubernetes, CI/CD, Infrastructure Automation)",
  "Optimized & Scalable Code (Data Structures & Algorithms in Java)",
  "Building High-Performance RESTful & GraphQL APIs",
  "Database Design, Management & Optimization",
  "Continuous Learning — always exploring the bleeding edge",
];

const AboutSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="about" className="section" style={{ background: "var(--bg2)" }} ref={ref}>
      <div className="section-inner">
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>Background</div>
        <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
          About <span>Me</span>
        </h2>
        <div className="about-wrap">
          <div className={`about-img-wrap fade-up fade-up-d2 ${inView ? "visible" : ""}`}>
            <div className="about-img">👨‍💻</div>
            <div className="about-img-tag">
              <div className="about-tag-num">3+</div>
              <div className="about-tag-label">Projects Shipped</div>
            </div>
          </div>
          <div className={`about-content fade-up fade-up-d3 ${inView ? "visible" : ""}`}>
            <p>
              I am a passionate software developer with a strong analytical mindset, currently working as a{" "}
              <strong>Software Developer at GlobalXperts</strong>. I specialize in{" "}
              <strong>full-stack web development</strong>, with expertise in{" "}
              <strong>React, Node.js, Express.js, and MongoDB</strong>. Additionally, I have a strong grasp of{" "}
              <strong>DevOps practices</strong>, including{" "}
              <strong>Docker, Kubernetes, AWS, CI/CD pipelines, and infrastructure automation.</strong>
            </p>
            <p>
              I believe great software is as much about the process as the product — clean code, fast pipelines,
              and seamless UX are equally important.
            </p>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.85rem", fontWeight:700, color:"var(--text)", marginBottom:14, textTransform:"uppercase", letterSpacing:"0.1em" }}>
              Core Competencies
            </h3>
            <div className="about-aspects">
              {ASPECTS.map((a, i) => (
                <div key={i} className="aspect-item" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <SlArrowRight className="aspect-arrow" />
                  <span className="aspect-text">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("heroSection");

  // Track which section is in view for Navbar active state
  useEffect(() => {
    const ids = ["heroSection", "Myskills", "MyExperience", "MyProjects", "about", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme: () => setDark((d) => !d) }}>
      <GlobalStyles />
      <div className={`portfolio-root ${dark ? "dark" : "light"} noise`}>
        <Navbar activeSection={activeSection} />

        <Hero />
        <Skills />
        <TechSkills />
        <Experience />
        <Achievements/>
        <Projects />
        <Blog />
        <AboutSection />
        <Education />
        <Contact />
        <Footer />

        <ScrollToTop />
      </div>
    </ThemeContext.Provider>
  );
}