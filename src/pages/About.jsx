import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { useInView } from "../hooks";
import Navbar from "../components/Navbar";
import Education from "./Education";
import aboutImage from "../assets/about-croped.png";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";

const ASPECTS = [
  { icon: "⚛️", text: "Full-Stack Web Development (React, Node.js, Express, MongoDB)" },
  { icon: "☁️", text: "DevOps & Cloud (AWS, Docker, Kubernetes, CI/CD, Infrastructure Automation)" },
  { icon: "☕", text: "Optimized & Scalable Code (Data Structures & Algorithms in Java)" },
  { icon: "🔌", text: "Building High-Performance RESTful & GraphQL APIs" },
  { icon: "🗄️", text: "Database Design, Management & Optimization" },
  { icon: "📚", text: "Continuous Learning — always exploring the bleeding edge" },
];

const STATS = [
  { num: "1+",  label: "Years Exp."    },
  { num: "3+",  label: "Projects"      },
  { num: "15+", label: "Technologies"  },
  { num: "2",   label: "Companies"     },
];

const About = () => {
  const [heroRef, heroInView] = useInView(0.05);
  const [statsRef, statsInView] = useInView(0.2);
  const [aspectsRef, aspectsInView] = useInView(0.1);

  return (
    <>
      <style>{`
        /* ── PAGE-LEVEL OVERRIDES ─────────────────────────────────────────── */
        .about-page {
          background: var(--bg);
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
        }

        /* hero banner */
        .about-hero {
          background: var(--bg2);
          padding: 140px 48px 80px;
          position: relative;
          overflow: hidden;
        }
        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .about-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .about-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* image column */
        .about-photo-col { position: relative; }
        .about-photo-frame {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          border: 2px solid var(--border);
          box-shadow: 0 24px 80px rgba(0,0,0,0.3);
        }
        .about-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .about-photo-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(8,12,20,0.5));
          pointer-events: none;
        }
        /* decorative corner accent */
        .about-photo-accent {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 70px;
          height: 70px;
          border-top: 3px solid var(--accent);
          border-right: 3px solid var(--accent);
          border-radius: 0 16px 0 0;
        }
        .about-photo-accent-bl {
          position: absolute;
          bottom: -10px;
          left: -10px;
          width: 70px;
          height: 70px;
          border-bottom: 3px solid var(--accent2);
          border-left: 3px solid var(--accent2);
          border-radius: 0 0 0 16px;
        }
        /* floating status badge */
        .about-status-badge {
          position: absolute;
          bottom: -20px;
          right: -16px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          z-index: 2;
        }
        .about-status-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.25);
          animation: pulse-green 2s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-green {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.25); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.1); }
        }
        .about-status-text { font-size: 0.82rem; color: var(--text); font-weight: 500; line-height: 1.3; }
        .about-status-sub { font-size: 0.72rem; color: var(--text2); font-family: 'DM Mono', monospace; }

        /* text column */
        .about-text-col { display: flex; flex-direction: column; gap: 24px; }
        .about-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .about-eyebrow::before { content:''; width:24px; height:1px; background:var(--accent); }
        .about-page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text);
          line-height: 1.05;
        }
        .about-page-title span { color: var(--accent); }
        .about-bio {
          color: var(--text2);
          font-size: 0.97rem;
          line-height: 1.85;
        }
        .about-bio strong { color: var(--text); }
        .about-socials-row { display: flex; gap: 12px; }
        .about-social-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid var(--border);
          background: var(--card);
          color: var(--text2);
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .about-social-btn:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

        /* ── STATS ROW ───────────────────────────────────────────────────── */
        .about-stats-wrap {
          background: var(--bg);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 40px 48px;
        }
        .about-stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .about-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .about-stat:last-child { border-right: none; }
        .about-stat:hover { background: var(--card); border-radius: 14px; }
        .about-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 6px;
        }
        .about-stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--text2);
          text-transform: uppercase;
        }

        /* ── COMPETENCIES ────────────────────────────────────────────────── */
        .about-competencies {
          padding: 80px 48px;
          background: var(--bg2);
        }
        .about-competencies-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .comp-header { margin-bottom: 40px; }
        .comp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .comp-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 18px 20px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .comp-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--accent), var(--accent2));
          border-radius: 3px 0 0 3px;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .comp-item:hover { border-color: color-mix(in srgb, var(--accent) 40%, transparent); transform: translateX(4px); box-shadow: 0 8px 30px var(--glow); }
        .comp-item:hover::before { opacity: 1; }
        .comp-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 1px; }
        .comp-text { font-size: 0.88rem; color: var(--text); font-weight: 500; line-height: 1.5; }

        /* ── RESPONSIVE ──────────────────────────────────────────────────── */
        @media (max-width: 900px) {
          .about-hero { padding: 120px 24px 60px; }
          .about-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .about-photo-col { max-width: 280px; margin: 0 auto; }
          .about-stats-wrap { padding: 32px 24px; }
          .about-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .about-stat { border-right: none; border-bottom: 1px solid var(--border); }
          .about-stat:nth-child(odd) { border-right: 1px solid var(--border); }
          .about-stat:nth-child(3), .about-stat:nth-child(4) { border-bottom: none; }
          .about-competencies { padding: 60px 24px; }
          .comp-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .about-socials-row { flex-wrap: wrap; }
          .about-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="about-page">
        <Navbar />

        {/* ── HERO ── */}
        <section className="about-hero" ref={heroRef}>
          {/* orbs */}
          <div className="about-hero-orb" style={{ width:400, height:400, background:"radial-gradient(var(--glow),transparent 70%)", top:"-80px", right:"5%", opacity:0.5 }} />
          <div className="about-hero-orb" style={{ width:250, height:250, background:"radial-gradient(color-mix(in srgb,var(--accent2) 25%,transparent),transparent 70%)", bottom:"-40px", left:"10%", opacity:0.4 }} />

          <div className="about-hero-inner">
            {/* ── Photo ── */}
            <div className={`about-photo-col fade-up ${heroInView ? "visible" : ""}`}>
              <div className="about-photo-frame">
                <img src={aboutImage} alt="Ankit Singh Ghosh" />
              </div>
              <div className="about-photo-accent" />
              <div className="about-photo-accent-bl" />
              <div className="about-status-badge">
                <div className="about-status-dot" />
                <div>
                  <div className="about-status-text">Open to opportunities</div>
                  <div className="about-status-sub">Software Developer · Noida, India</div>
                </div>
              </div>
            </div>

            {/* ── Text ── */}
            <div className="about-text-col">
              <div className={`about-eyebrow fade-up fade-up-d1 ${heroInView ? "visible" : ""}`}>
                Background
              </div>
              <h1 className={`about-page-title fade-up fade-up-d2 ${heroInView ? "visible" : ""}`}>
                About <span>Me</span>
              </h1>
              <p className={`about-bio fade-up fade-up-d2 ${heroInView ? "visible" : ""}`}>
                I'm a passionate software developer with a strong analytical mindset, currently working as a{" "}
                <strong>Software Developer at GlobalXperts</strong>. I specialize in{" "}
                <strong>full-stack web development</strong>, with deep expertise in{" "}
                <strong>React, Node.js, Express.js, and MongoDB</strong>.
              </p>
              <p className={`about-bio fade-up fade-up-d3 ${heroInView ? "visible" : ""}`}>
                Beyond the code, I'm deeply invested in <strong>DevOps culture</strong> — automating everything,
                reducing toil, and shipping reliable software fast. I believe great software is as much about
                the process as the product.
              </p>

              <div className={`about-socials-row fade-up fade-up-d3 ${heroInView ? "visible" : ""}`}>
                <a href="https://www.linkedin.com/in/ankitoid/" target="_blank" rel="noreferrer" className="about-social-btn">
                  <SiLinkedin size={15} /> LinkedIn
                </a>
                <a href="https://github.com/ankitoid/" target="_blank" rel="noreferrer" className="about-social-btn">
                  <SiGithub size={15} /> GitHub
                </a>
                <a href="https://leetcode.com/ankitoid/" target="_blank" rel="noreferrer" className="about-social-btn">
                  <SiLeetcode size={15} /> LeetCode
                </a>
                <a
                  href="https://drive.google.com/file/d/1AKDE65IXTJmkKnBJX7B3h0IzopUkyyzR/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "9px 20px",
                    background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                    color: "#fff",
                    borderRadius: 10,
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    border: "none",
                    fontFamily: "'Outfit',sans-serif",
                    transition: "all 0.2s",
                  }}
                >
                  ↓ Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ROW ── */}
        <div className="about-stats-wrap" ref={statsRef}>
          <div className="about-stats-inner">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`about-stat fade-up ${statsInView ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COMPETENCIES ── */}
        <section className="about-competencies" ref={aspectsRef}>
          <div className="about-competencies-inner">
            <div className="comp-header">
              <div className={`section-label fade-up ${aspectsInView ? "visible" : ""}`}>Expertise</div>
              <h2 className={`section-title fade-up fade-up-d1 ${aspectsInView ? "visible" : ""}`} style={{ marginBottom: 0 }}>
                Core <span>Competencies</span>
              </h2>
            </div>

            <div className="comp-grid">
              {ASPECTS.map((a, i) => (
                <div
                  key={i}
                  className={`comp-item fade-up ${aspectsInView ? "visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <span className="comp-icon">{a.icon}</span>
                  <span className="comp-text">{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION (unchanged) ── */}
        <Education />
      </div>
    </>
  );
};

export default About;