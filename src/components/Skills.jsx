import React from "react";
import { useInView } from "../hooks";

const SERVICES = [
  {
    icon: "⚛️",
    title: "Front-End & UI/UX",
    desc: "Pixel-perfect, responsive interfaces with React.js, Tailwind CSS, and modern animation libraries. Backed by Figma-driven design — from wireframes to high-fidelity prototypes that convert.",
    num: "01",
    tags: ["React", "Tailwind", "Figma", "Framer Motion"],
    color: "#6C63FF",
  },
  {
    icon: "🛠️",
    title: "Back-End Development",
    desc: "Scalable, secure server-side solutions with Node.js, Express, and databases like PostgreSQL and MongoDB. RESTful APIs, GraphQL, and authentication built to last.",
    num: "02",
    tags: ["Node.js", "Express", "PostgreSQL", "GraphQL"],
    color: "#00C9A7",
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud",
    desc: "End-to-end CI/CD pipelines with AWS, Docker, Kubernetes, and Jenkins. Infrastructure as code. Zero-downtime deployments and rock-solid uptime.",
    num: "03",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    color: "#F7A93B",
  },
  {
    icon: "🧪",
    title: "Testing & Optimisation",
    desc: "Comprehensive test coverage with Jest, Cypress, and Playwright. Performance audits, Core Web Vitals tuning, and bundle optimisation for lightning-fast, bug-resistant products.",
    num: "04",
    tags: ["Jest", "Cypress", "Lighthouse", "Webpack"],
    color: "#FF6B6B",
  },
];

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <section id="Myskills" className="section" ref={ref}>
      <style>{`
        .services-grid-v2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (max-width: 768px) {
          .services-grid-v2 { grid-template-columns: 1fr; }
        }
        .service-card-v2 {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 36px 32px 28px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .service-card-v2:hover {
          transform: translateY(-6px);
          border-color: var(--card-color);
          box-shadow: 0 16px 48px -12px var(--card-glow);
        }
        .service-card-v2::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-color);
          border-radius: 20px 20px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .service-card-v2:hover::before { opacity: 1; }
        .card-bg-number {
          position: absolute;
          top: -10px; right: 16px;
          font-size: 96px;
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -4px;
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .card-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          background: var(--card-color);
          background: linear-gradient(135deg, var(--card-color) 0%, var(--card-glow) 100%);
          flex-shrink: 0;
          box-shadow: 0 4px 20px var(--card-glow);
        }
        .card-num-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--card-color);
          text-transform: uppercase;
          opacity: 0.85;
        }
        .service-card-v2 h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0 0 12px;
          color: #fff;
        }
        .service-card-v2 p {
          font-size: 0.9rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.55);
          margin: 0 0 20px;
        }
        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .card-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.08);
          letter-spacing: 0.5px;
          transition: background 0.2s, color 0.2s;
        }
        .service-card-v2:hover .card-tag {
          background: color-mix(in srgb, var(--card-color) 12%, transparent);
          color: var(--card-color);
          border-color: color-mix(in srgb, var(--card-color) 30%, transparent);
        }
      `}</style>

      <div className="section-inner">
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>What I Do</div>
        <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
          My <span>Services</span>
        </h2>

        <div className="services-grid-v2">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`service-card-v2 fade-up fade-up-d${i + 1} ${inView ? "visible" : ""}`}
              style={{
                "--card-color": s.color,
                "--card-glow": s.color + "44",
              }}
            >
              <div className="card-bg-number">{s.num}</div>

              <div className="card-header">
                <div className="card-icon-wrap">{s.icon}</div>
                <span className="card-num-badge">#{s.num}</span>
              </div>

              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              <div className="card-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;