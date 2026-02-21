import React, { useRef, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { BsWhatsapp, BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsGithub, BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import logo from "./../assets/logo.png"

// ── Logo with animated glow ring ──────────────────────────────────────────────
const LogoMark = () => (
  <div className="ft-logo-mark">
    <div className="ft-logo-ring" />
    <svg width="28" height="28" viewBox="0 0 82 76" fill="none">
      <path
        d="M25.96 75.05C19.85 75.05 12.81 69.42 3.17004 57.03C-0.99996 51.67 -1.06996 44.49 3.00004 39.17C5.08004 36.45 12.83 28.72 30.57 34.13C30.93 26.97 31.39 19.83 32.57 14.18C34.52 4.78001 38.61 0.0100098 44.72 0.0100098C58.51 0.0100098 73.05 21 78.53 35.18C82.7 45.97 82.5 53.86 77.95 58C73.81 61.76 67.29 61.46 58.57 57.1C47.84 51.73 44.1 49.95 39.47 47.95C38.56 61.49 36.63 72.16 28.96 74.59C27.98 74.9 26.98 75.06 25.96 75.06V75.05Z"
        fill="url(#logoGrad)"
      />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="82" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const NAV_LINKS = [
  { label: "Home",       target: "heroSection"  },
  { label: "Skills",     target: "Myskills"     },
  { label: "Experience", target: "MyExperience" },
  { label: "Projects",   target: "MyProjects"   },
  { label: "Contact",    target: "contact"      },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/ankitoid/",              Icon: BsLinkedin,  title: "LinkedIn",  color: "#0077b5" },
  { href: "https://github.com/ankitoid/",                        Icon: BsGithub,    title: "GitHub",    color: "#e2eaf7" },
  { href: "https://api.whatsapp.com/send?phone=916265227382",    Icon: BsWhatsapp,  title: "WhatsApp",  color: "#25d366" },
  { href: "https://x.com/ankit_thakur12",                        Icon: BsTwitter,   title: "Twitter",   color: "#1da1f2" },
  { href: "https://www.facebook.com/ankitoid",                   Icon: BsFacebook,  title: "Facebook",  color: "#1877f2" },
  { href: "https://www.instagram.com/ankit.__.thakur/",          Icon: BsInstagram, title: "Instagram", color: "#e1306c" },
];

const Footer = () => {
  const footerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  // Mouse spotlight effect
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
    };
    const onLeave = () => setMouse(m => ({ ...m, active: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <>
      <style>{`
        /* ── FOOTER ──────────────────────────────────────────────────────── */
        .ft-root {
          background: var(--bg);
          border-top: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* mouse spotlight */
        .ft-spotlight {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s;
          z-index: 0;
        }

        /* grid overlay */
        .ft-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          opacity: 0.5;
          z-index: 0;
        }

        .ft-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 48px 32px;
          position: relative;
          z-index: 1;
        }

        /* ── TOP ROW ── */
        .ft-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }

        /* ── BRAND COL ── */
        .ft-brand {}

        .ft-logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          cursor: default;
        }
        .ft-logo-mark {
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ft-logo-ring {
          position: absolute;
          inset: -4px;
          border-radius: 12px;
          border: 1.5px solid transparent;
          background: linear-gradient(135deg, #3b82f6, #06b6d4) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: ft-ring-pulse 3s ease-in-out infinite;
        }
        @keyframes ft-ring-pulse {
          0%,100% { opacity:0.5; transform:scale(1); }
          50%      { opacity:1;   transform:scale(1.06); }
        }
        .ft-logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.03em;
          color: var(--text);
          line-height: 1;
        }
        .ft-logo-text span { color: #3b82f6; }

        .ft-tagline {
          color: var(--text2);
          font-size: 0.88rem;
          line-height: 1.75;
          margin-bottom: 24px;
          max-width: 300px;
        }

        /* status pill */
        .ft-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 20px;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.25);
          margin-bottom: 24px;
        }
        .ft-status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          animation: ft-pulse 2s infinite;
        }
        @keyframes ft-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
        .ft-status-text {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: #22c55e;
          text-transform: uppercase;
        }

        /* social icons */
        .ft-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ft-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--card);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text2);
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.22s;
        }
        .ft-social-btn:hover {
          color: var(--social-color);
          border-color: var(--social-color);
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 6px 20px color-mix(in srgb, var(--social-color) 30%, transparent);
          background: color-mix(in srgb, var(--social-color) 10%, transparent);
        }

        /* ── NAV COL ── */
        .ft-nav-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ft-nav-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .ft-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ft-nav-list li a,
        .ft-nav-list li span {
          color: var(--text2);
          text-decoration: none;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ft-nav-list li a::before,
        .ft-nav-list li span::before {
          content: '';
          width: 14px;
          height: 1px;
          background: var(--border);
          transition: width 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .ft-nav-list li a:hover,
        .ft-nav-list li span:hover {
          color: var(--accent);
          transform: translateX(4px);
        }
        .ft-nav-list li a:hover::before,
        .ft-nav-list li span:hover::before {
          width: 20px;
          background: var(--accent);
        }

        /* contact items */
        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text2);
          text-decoration: none;
          font-size: 0.84rem;
          line-height: 1.5;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: all 0.2s;
          margin-bottom: 8px;
        }
        .ft-contact-item:hover {
          border-color: var(--border);
          background: var(--card);
          color: var(--accent);
          transform: translateX(4px);
        }
        .ft-contact-icon {
          color: var(--accent);
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* ── BOTTOM ── */
        .ft-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin-bottom: 24px;
        }
        .ft-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ft-copy {
          font-size: 0.82rem;
          color: var(--text2);
        }
        .ft-copy span { color: var(--accent); }
        .ft-built {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--text2);
          opacity: 0.6;
          letter-spacing: 0.06em;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ft-inner { padding: 48px 24px 28px; }
          .ft-top { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 520px) {
          .ft-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="ft-root" ref={footerRef}>
        {/* Mouse spotlight */}
        <div
          className="ft-spotlight"
          style={{
            left: mouse.x,
            top: mouse.y,
            opacity: mouse.active ? 1 : 0,
          }}
        />

        <div className="ft-inner">
          <div className="ft-top">

            {/* ── BRAND ── */}
            <div className="ft-brand">
              <div className="ft-logo-wrap">
                {/* <LogoMark /> */}
                <img src={logo} className="h-7"/>
                <div className="ft-logo-text">An<span>kit</span></div>
              </div>

              <div className="ft-status">
                <div className="ft-status-dot" />
                <span className="ft-status-text">Open to opportunities</span>
              </div>

              <p className="ft-tagline">
                Frontend Developer &amp; UI Architect crafting high-performance,
                scalable web applications — Lighthouse 94 · Bundle −42% · 15+ features shipped.
              </p>

              <div className="ft-socials">
                {SOCIALS.map(({ href, Icon, title, color }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-social-btn"
                    title={title}
                    style={{ "--social-color": color }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* ── NAV ── */}
            <div>
              <div className="ft-nav-title">Navigation</div>
              <ul className="ft-nav-list">
                {NAV_LINKS.map(({ label, target }) => (
                  <li key={label}>
                    <ScrollLink to={target} smooth offset={-70} duration={500}>
                      {label}
                    </ScrollLink>
                  </li>
                ))}
                <li>
                  <RouterLink to="/about">About Me</RouterLink>
                </li>
              </ul>
            </div>

            {/* ── CONTACT ── */}
            <div>
              <div className="ft-nav-title">Contact</div>

              <a
                href="https://www.google.com/maps/@28.5415911,77.2895358,13z?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="ft-contact-item"
              >
                <CiLocationOn className="ft-contact-icon" />
                Noida, Uttar Pradesh, India 201317
              </a>

              <a href="mailto:ankitsinghghoshi1234@gmail.com" className="ft-contact-item">
                <AiOutlineMail className="ft-contact-icon" />
                ankitsinghghoshi1234@gmail.com
              </a>

              <a href="tel:6265227382" className="ft-contact-item">
                <BsPhone className="ft-contact-icon" />
                +91 6265227382
              </a>

              <a
                href="https://drive.google.com/file/d/1AKDE65IXTJmkKnBJX7B3h0IzopUkyyzR/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="ft-contact-item"
              >
                <span className="ft-contact-icon">📄</span>
                Download Resume
              </a>
            </div>
          </div>

          {/* ── BOTTOM ── */}
          <div className="ft-divider" />
          <div className="ft-bottom">
            <p className="ft-copy">
              Made with <span>💙</span> by <span>Ankit Singh Ghosh</span> · {new Date().getFullYear()}
            </p>
            <span className="ft-built">React · Vite · Tailwind</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;