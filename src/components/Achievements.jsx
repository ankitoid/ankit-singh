import React from "react";
import { useInView } from "../hooks";

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Unmatched Dedication Award",
    org: "GlobalXperts (GX-Elevate)",
    year: "2025",
    desc: "Recognized by CEO and CTO for exceptional performance and commitment to the team.",
    color: "#f59e0b",
  },
  {
    icon: "🥇",
    title: "Smart India Hackathon — 1st Rank",
    org: "College Level · SIH 2023",
    year: "2023",
    desc: "Secured 1st rank at the college level round of Smart India Hackathon 2023 for an innovative full-stack solution.",
    color: "#3b82f6",
  },
  {
    icon: "👑",
    title: "Best Team Leader Award",
    org: "National Hackathon",
    year: "2023",
    desc: "Recognized for leading cross-functional teams to victory in national competitions.",
    color: "#8b5cf6",
  },
  {
    icon: "🎓",
    title: "IIT Bombay — A+ Grade",
    org: "Programming Basics Certification",
    year: "2022",
    desc: "Secured A+ in a competitive certification program at IIT Bombay.",
    color: "#10b981",
  },
];

const Achievements = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <>
      <style>{`
        .ach-section {
          padding: 100px 48px;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }

        /* subtle radial bg */
        .ach-section::before {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(var(--glow), transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          opacity: 0.25;
        }

        .ach-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── GRID ── */
        .ach-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        /* ── CARD ── */
        .ach-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 28px 28px 28px 24px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          cursor: default;
        }

        /* left color accent bar */
        .ach-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          border-radius: 4px 0 0 4px;
          background: var(--ach-color);
          opacity: 0.85;
          transition: opacity 0.3s;
        }

        /* glow layer on hover */
        .ach-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 50%, var(--ach-color), transparent 70%);
          opacity: 0;
          transition: opacity 0.35s;
          pointer-events: none;
          border-radius: 20px;
        }

        .ach-card:hover {
          transform: translateY(-6px);
          border-color: color-mix(in srgb, var(--ach-color) 45%, transparent);
          box-shadow: 0 16px 48px color-mix(in srgb, var(--ach-color) 20%, transparent);
        }
        .ach-card:hover::after { opacity: 0.07; }
        .ach-card:hover::before { opacity: 1; }

        /* ── ICON BOX ── */
        .ach-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: color-mix(in srgb, var(--ach-color) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--ach-color) 30%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: transform 0.3s;
        }
        .ach-card:hover .ach-icon-box {
          transform: scale(1.08) rotate(-4deg);
        }

        /* ── CONTENT ── */
        .ach-content { flex: 1; position: relative; z-index: 1; }

        .ach-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 6px;
        }

        .ach-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.3;
        }

        .ach-year {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 20px;
          background: color-mix(in srgb, var(--ach-color) 12%, transparent);
          color: var(--ach-color);
          border: 1px solid color-mix(in srgb, var(--ach-color) 28%, transparent);
          letter-spacing: 0.06em;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ach-org {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: var(--ach-color);
          letter-spacing: 0.05em;
          margin-bottom: 10px;
          opacity: 0.85;
        }

        .ach-desc {
          font-size: 0.86rem;
          color: var(--text2);
          line-height: 1.65;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .ach-section { padding: 80px 24px; }
          .ach-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ach-card { padding: 22px 18px 22px 20px; gap: 14px; }
          .ach-icon-box { width: 46px; height: 46px; font-size: 1.3rem; }
        }
      `}</style>

      <section className="ach-section" ref={ref}>
        <div className="ach-inner">
          {/* heading */}
          <div className={`section-label fade-up ${inView ? "visible" : ""}`}>
            Recognition
          </div>
          <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
            Achievements &amp; <span>Awards</span>
          </h2>

          {/* cards */}
          <div className="ach-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={i}
                className={`ach-card fade-up ${inView ? "visible" : ""}`}
                style={{
                  "--ach-color": a.color,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* icon */}
                <div className="ach-icon-box">{a.icon}</div>

                {/* text */}
                <div className="ach-content">
                  <div className="ach-top">
                    <div className="ach-title">{a.title}</div>
                    <span className="ach-year">{a.year}</span>
                  </div>
                  <div className="ach-org">{a.org}</div>
                  <div className="ach-desc">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;