import React, { useState } from "react";
import { useInView } from "../hooks";

// ── All logos from devicons CDN — no local files needed ──────────────────────
const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const CATEGORIES = [
  {
    label: "Languages",
    color: "#3b82f6",
    skills: [
      { name: "JavaScript", src: `${BASE}/javascript/javascript-original.svg` },
      { name: "TypeScript", src: `${BASE}/typescript/typescript-original.svg` },
      { name: "Java",       src: `${BASE}/java/java-original.svg` },
      { name: "Python",     src: `${BASE}/python/python-original.svg` },
    ],
  },
  {
    label: "Frontend",
    color: "#06b6d4",
    skills: [
      { name: "React",    src: `${BASE}/react/react-original.svg` },
      { name: "Next.js",  src: `${BASE}/nextjs/nextjs-original.svg`,    invert: true },
      { name: "Redux",    src: `${BASE}/redux/redux-original.svg` },
      { name: "Tailwind", src: `${BASE}/tailwindcss/tailwindcss-original.svg` },
      { name: "HTML5",    src: `${BASE}/html5/html5-original.svg` },
      { name: "CSS3",     src: `${BASE}/css3/css3-original.svg` },
    ],
  },
  {
    label: "Backend",
    color: "#10b981",
    skills: [
      { name: "Node.js",    src: `${BASE}/nodejs/nodejs-original.svg` },
      { name: "Express.js", src: `${BASE}/express/express-original.svg`, invert: true },
      { name: "GraphQL",    src: `${BASE}/graphql/graphql-plain.svg` },
    ],
  },
  {
    label: "Database",
    color: "#f59e0b",
    skills: [
      { name: "MongoDB", src: `${BASE}/mongodb/mongodb-original.svg` },
      { name: "MySQL",   src: `${BASE}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", src: `${BASE}/postgresql/postgresql-original.svg` },
      { name: "Redis",   src: `${BASE}/redis/redis-original.svg` },
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "#8b5cf6",
    skills: [
      { name: "Docker",     src: `${BASE}/docker/docker-original.svg` },
      { name: "Kubernetes", src: `${BASE}/kubernetes/kubernetes-original.svg` },
      { name: "AWS",        src: `${BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Jenkins",    src: `${BASE}/jenkins/jenkins-original.svg` },
      { name: "GitHub",     src: `${BASE}/github/github-original.svg`, invert: true },
      { name: "Git",        src: `${BASE}/git/git-original.svg` },
      { name: "Linux",      src: `${BASE}/linux/linux-original.svg` },
    ],
  },
  // {
  //   label: "AI & ML",
  //   color: "#ec4899",
  //   skills: [
  //     { name: "TensorFlow", src: `${BASE}/tensorflow/tensorflow-original.svg` },
  //     { name: "PyTorch",    src: `${BASE}/pytorch/pytorch-original.svg` },
  //     { name: "OpenCV",     src: `${BASE}/opencv/opencv-original.svg` },
  //     { name: "Jupyter",    src: `${BASE}/jupyter/jupyter-original.svg` },
  //     { name: "NumPy",      src: `${BASE}/numpy/numpy-original.svg` },
  //     { name: "Pandas",     src: `${BASE}/pandas/pandas-original.svg` },
  //   ],
  // },
];

const TechSkills = () => {
  const [ref, inView] = useInView();
  const [activeCategory, setActiveCategory] = useState("All");

  const allLabels = ["All", ...CATEGORIES.map((c) => c.label)];

  const visibleCategories =
    activeCategory === "All"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.label === activeCategory);

  return (
    <>
      <style>{`
        .ts-section {
          padding: 100px 48px;
          background: var(--bg2);
          position: relative;
          overflow: hidden;
        }

        .ts-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

        /* ── FILTER TABS ── */
        .ts-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 52px;
        }
        .ts-tab {
          padding: 7px 18px;
          border-radius: 20px;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          border: 1px solid var(--border);
          background: var(--card);
          color: var(--text2);
          cursor: pointer;
          transition: all 0.2s;
        }
        .ts-tab:hover { border-color: var(--accent); color: var(--accent); }
        .ts-tab.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
          box-shadow: 0 4px 16px var(--glow);
        }

        /* ── CATEGORY BLOCK ── */
        .ts-category { margin-bottom: 44px; }
        .ts-category-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .ts-category-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ts-category-name {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text2);
        }
        .ts-category-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        /* ── SKILL CHIPS ── */
        .ts-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ts-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.22s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .ts-chip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--chip-color), transparent);
          opacity: 0;
          transition: opacity 0.25s;
          border-radius: 12px;
        }
        .ts-chip:hover {
          border-color: var(--chip-color);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--chip-color) 25%, transparent);
        }
        .ts-chip:hover::before { opacity: 0.07; }

        .ts-chip img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }
        .ts-chip span {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text2);
          position: relative;
          z-index: 1;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .ts-chip:hover span { color: var(--text); }

        /* inverted logos (black SVGs on dark bg) */
        .ts-chip img.invert-dark {
          filter: invert(1);
        }
        .portfolio-root.light .ts-chip img.invert-dark {
          filter: none;
        }

        @media (max-width: 768px) {
          .ts-section { padding: 80px 24px; }
        }
      `}</style>

      <section id="Myskills-tech" className="ts-section" ref={ref}>
        <div className="ts-inner">
          <div className={`section-label fade-up ${inView ? "visible" : ""}`}>Technology</div>
          <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
            Technical <span>Stack</span>
          </h2>

          {/* Filter tabs */}
          <div className={`ts-tabs fade-up fade-up-d2 ${inView ? "visible" : ""}`}>
            {allLabels.map((label) => (
              <button
                key={label}
                className={`ts-tab ${activeCategory === label ? "active" : ""}`}
                onClick={() => setActiveCategory(label)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Skill categories */}
          {visibleCategories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`ts-category fade-up ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${ci * 0.08}s` }}
            >
              {/* category label row */}
              <div className="ts-category-label">
                <div className="ts-category-dot" style={{ background: cat.color }} />
                <span className="ts-category-name">{cat.label}</span>
                <div className="ts-category-line" />
              </div>

              {/* chips */}
              <div className="ts-chips">
                {cat.skills.map((skill, si) => (
                  <div
                    key={skill.name}
                    className="ts-chip"
                    style={{
                      "--chip-color": cat.color,
                      transitionDelay: `${si * 0.04}s`,
                    }}
                  >
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className={skill.invert ? "invert-dark" : ""}
                      loading="lazy"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechSkills;