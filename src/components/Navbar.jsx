import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./../assets/logo.png"
// ── Logo SVG ──────────────────────────────────────────────────────────────────
const LogoIcon = ({ size = 26, color = "#3b82f6" }) => (
  <svg width={size} height={size} viewBox="0 0 82 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.96 75.05C19.85 75.05 12.81 69.42 3.17004 57.03C-0.99996 51.67 -1.06996 44.49 3.00004 39.17C5.08004 36.45 12.83 28.72 30.57 34.13C30.93 26.97 31.39 19.83 32.57 14.18C34.52 4.78001 38.61 0.0100098 44.72 0.0100098C58.51 0.0100098 73.05 21 78.53 35.18C82.7 45.97 82.5 53.86 77.95 58C73.81 61.76 67.29 61.46 58.57 57.1C47.84 51.73 44.1 49.95 39.47 47.95C38.56 61.49 36.63 72.16 28.96 74.59C27.98 74.9 26.98 75.06 25.96 75.06V75.05ZM19.11 41.87C14.78 41.87 11.97 43.24 10.63 45C9.23004 46.83 9.27004 49.24 10.75 51.13C22.17 65.81 26.03 65.43 26.08 65.42C26.08 65.42 27.66 64.46 28.84 57.28C29.46 53.48 29.82 48.86 30.09 44.08C25.72 42.5 22.07 41.87 19.12 41.87H19.11ZM62.86 48.51C69.53 51.84 71.47 50.9 71.49 50.89C72.08 50.3 72.63 46.01 69.1 37.46C63.19 23.14 51.34 9.61001 44.71 9.61001C44.43 9.61001 43.08 10.77 41.96 16.13C40.77 21.88 40.37 29.93 40 37.76C46.61 40.53 49.56 41.87 62.85 48.52L62.86 48.51Z"
      fill={color}
    />
  </svg>
);

const NAV_LINKS = [
  { label: "Home",        type: "scroll", target: "heroSection"  },
  { label: "Skills",     type: "scroll", target: "Myskills"      },
  { label: "Experience", type: "scroll", target: "MyExperience"  },
  { label: "Projects",   type: "scroll", target: "MyProjects"    },
  { label: "About Me",   type: "scroll", target: "about"         }, // scrolls to #about on homepage
];

// activeSection prop is optional.
// If the parent tracks scroll and passes it down, we use that.
// Otherwise the Navbar tracks it internally on its own.
const Navbar = ({ activeSection }) => {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [internalActive, setInternalActive] = useState("heroSection");
  const menuRef = useRef(null);

  const location = useLocation();
  const navigate  = useNavigate();

  // Prefer the parent-provided value; fall back to internal
  const activeLink = activeSection ?? internalActive;

  // ── close menu on resize ───────────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── navbar shrink on scroll ────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── internal active-section tracking (skipped when parent controls it) ─────
  useEffect(() => {
    if (activeSection !== undefined) return; // parent is in charge — don't double-track

    const sections = NAV_LINKS.filter(l => l.type === "scroll").map(l => l.target);
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setInternalActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [activeSection]);

  // ── close menu on outside click ────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // ── original cross-page navigation logic ──────────────────────────────────
  const handleScrollNav = (target) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 120);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600&display=swap');

        .nb-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: padding 0.3s, background 0.3s, box-shadow 0.3s;
          font-family: 'Outfit', sans-serif;
        }

        .nb-root.scrolled {
          background: rgba(8, 12, 20, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(59,130,246,0.12), 0 8px 32px rgba(0,0,0,0.4);
        }
        .nb-root.top {
          background: rgba(8, 12, 20, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .nb-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── LOGO ── */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-logo-icon-wrap {
          position: relative;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nb-logo-icon-wrap::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 10px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          opacity: 0.18;
          transition: opacity 0.25s;
        }
        .nb-logo:hover .nb-logo-icon-wrap::before { opacity: 0.35; }
        .nb-logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          color: #e2eaf7;
          line-height: 1;
        }
        .nb-logo-text span { color: #3b82f6; }

        /* ── DESKTOP LINKS ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0; padding: 0;
        }

        .nb-link-item {
          position: relative;
        }

        .nb-link {
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #8ba4c8;
          cursor: pointer;
          text-decoration: none;
          border: none;
          background: none;
          transition: color 0.2s, background 0.2s;
          font-family: 'Outfit', sans-serif;
          white-space: nowrap;
        }
        .nb-link:hover {
          color: #e2eaf7;
          background: rgba(59,130,246,0.08);
        }
        .nb-link.active {
          color: #3b82f6;
          background: rgba(59,130,246,0.1);
        }
        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%; transform: translateX(-50%);
          width: 18px; height: 2px;
          border-radius: 2px;
          background: #3b82f6;
        }

        /* ── CTA BUTTON ── */
        .nb-cta {
          flex-shrink: 0;
          padding: 9px 22px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          border: none;
          border-radius: 9px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(59,130,246,0.3);
        }
        .nb-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(59,130,246,0.45);
          filter: brightness(1.08);
        }
        .nb-cta:active { transform: translateY(0); }

        /* ── HAMBURGER ── */
        .nb-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 9px;
          border: 1px solid rgba(59,130,246,0.2);
          background: rgba(59,130,246,0.06);
          color: #3b82f6;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .nb-hamburger:hover {
          background: rgba(59,130,246,0.14);
          border-color: rgba(59,130,246,0.4);
        }

        /* ── MOBILE DRAWER ── */
        .nb-drawer {
          position: absolute;
          top: 68px; left: 0; right: 0;
          background: rgba(8, 12, 20, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59,130,246,0.12);
          padding: 0;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(.4,0,.2,1), padding 0.3s;
        }
        .nb-drawer.open {
          max-height: 400px;
          padding: 12px 0 20px;
        }

        .nb-drawer-links {
          list-style: none;
          margin: 0; padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #8ba4c8;
          cursor: pointer;
          text-decoration: none;
          border: none;
          background: none;
          font-family: 'Outfit', sans-serif;
          width: 100%;
          text-align: left;
          transition: color 0.2s, background 0.2s;
        }
        .nb-drawer-link::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3b82f650;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .nb-drawer-link:hover, .nb-drawer-link.active {
          color: #e2eaf7;
          background: rgba(59,130,246,0.08);
        }
        .nb-drawer-link.active::before { background: #3b82f6; }

        .nb-drawer-cta {
          margin: 12px 20px 0;
          display: block;
          text-align: center;
          padding: 12px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          width: calc(100% - 40px);
          box-shadow: 0 4px 14px rgba(59,130,246,0.3);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .nb-links, .nb-cta { display: none; }
          .nb-hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          .nb-bar { padding: 0 16px; }
        }
      `}</style>

      <nav ref={menuRef} className={`nb-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="nb-bar">

          {/* ── LOGO ── */}
          <div className="nb-logo" onClick={() => handleScrollNav("heroSection")}>
            <div className="nb-logo-icon-wrap">
              {/* <LogoIcon size={26} color="#3b82f6" /> */}

              <img src={logo} className="h-7"/>
            </div>
            <span className="nb-logo-text">An<span>kit</span></span>
          </div>

          {/* ── DESKTOP LINKS ── */}
          <ul className="nb-links">
            {NAV_LINKS.map(({ label, type, target }) => {
              const isActive = activeLink === target;
              if (type === "route") {
                return (
                  <li key={label} className="nb-link-item">
                    <RouterLink
                      to={target}
                      className={`nb-link ${location.pathname === target ? "active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </RouterLink>
                  </li>
                );
              }
              return (
                <li key={label} className="nb-link-item">
                  <ScrollLink
                    to={target}
                    smooth
                    offset={-70}
                    duration={500}
                    spy
                    className={`nb-link ${isActive ? "active" : ""}`}
                    onClick={() => handleScrollNav(target)}
                  >
                    {label}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>

          {/* ── DESKTOP CTA ── */}
          <ScrollLink
            to="contact"
            smooth
            offset={-70}
            duration={500}
            className="nb-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me ✦
          </ScrollLink>

          {/* ── HAMBURGER ── */}
          <button
            className="nb-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <div className={`nb-drawer ${menuOpen ? "open" : ""}`}>
          <ul className="nb-drawer-links">
            {NAV_LINKS.map(({ label, type, target }) => {
              const isActive = activeLink === target;
              if (type === "route") {
                return (
                  <li key={label}>
                    <RouterLink
                      to={target}
                      className={`nb-drawer-link ${location.pathname === target ? "active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </RouterLink>
                  </li>
                );
              }
              return (
                <li key={label}>
                  <ScrollLink
                    to={target}
                    smooth
                    offset={-70}
                    duration={500}
                    className={`nb-drawer-link ${isActive ? "active" : ""}`}
                    onClick={() => handleScrollNav(target)}
                  >
                    {label}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          <ScrollLink
            to="contact"
            smooth
            offset={-70}
            duration={500}
            className="nb-drawer-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me ✦
          </ScrollLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;