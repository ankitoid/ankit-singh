import React from "react";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .portfolio-root { font-family: 'Outfit', sans-serif; transition: background 0.4s, color 0.4s; }

    .portfolio-root.dark  { --bg:#080c14; --bg2:#0d1626; --bg3:#111e35; --card:#0f1a2e; --card2:#131f35; --border:rgba(99,179,237,0.15); --text:#e2eaf7; --text2:#8ba4c8; --accent:#3b82f6; --accent2:#06b6d4; --glow:rgba(59,130,246,0.35); }
    .portfolio-root.light { --bg:#f0f5ff; --bg2:#e8f0fe; --bg3:#dde8ff; --card:#ffffff; --card2:#f7f9ff; --border:rgba(59,130,246,0.2); --text:#0f1a2e; --text2:#4a6080; --accent:#2563eb; --accent2:#0891b2; --glow:rgba(37,99,235,0.2); }

    .portfolio-root { background: var(--bg); color: var(--text); min-height: 100vh; }

    /* NOISE */
    .noise::before { content:''; position:fixed; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E"); pointer-events:none; z-index:0; opacity:0.6; }

    /* GRID BG */
    .grid-bg { background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 60px 60px; }

    /* GLOW ORB */
    .glow-orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }

    /* FADE UP ANIMATION */
    .fade-up { opacity:0; transform:translateY(40px); transition:opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
    .fade-up.visible { opacity:1; transform:none; }
    .fade-up-d1 { transition-delay:0.1s; }
    .fade-up-d2 { transition-delay:0.2s; }
    .fade-up-d3 { transition-delay:0.3s; }
    .fade-up-d4 { transition-delay:0.4s; }

    /* SECTION COMMON */
    .section { padding:100px 48px; position:relative; }
    .section-inner { max-width:1100px; margin:0 auto; }
    .section-label { font-family:'DM Mono',monospace; font-size:0.75rem; letter-spacing:0.2em; color:var(--accent); text-transform:uppercase; display:flex; align-items:center; gap:10px; margin-bottom:14px; }
    .section-label::before { content:''; width:24px; height:1px; background:var(--accent); }
    .section-title { font-family:'Syne',sans-serif; font-size:clamp(2rem,4vw,3rem); font-weight:800; letter-spacing:-0.03em; color:var(--text); margin-bottom:60px; }
    .section-title span { color:var(--accent); }

    /* BUTTONS */
    .btn-primary { padding:12px 28px; background:var(--accent); color:#fff; border:none; border-radius:10px; font-weight:600; font-size:0.9rem; cursor:pointer; font-family:'Outfit',sans-serif; transition:all 0.2s; letter-spacing:0.02em; }
    .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 24px var(--glow); filter:brightness(1.1); }
    .btn-ghost { padding:12px 28px; background:transparent; color:var(--text); border:1px solid var(--border); border-radius:10px; font-weight:500; font-size:0.9rem; cursor:pointer; font-family:'Outfit',sans-serif; transition:all 0.2s; }
    .btn-ghost:hover { border-color:var(--accent); color:var(--accent); }

    /* SOCIAL ICON */
    .social-icon { width:42px; height:42px; border-radius:10px; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--text2); text-decoration:none; transition:all 0.2s; font-size:1rem; background:var(--card); }
    .social-icon:hover { color:var(--accent); border-color:var(--accent); transform:translateY(-3px); box-shadow:0 8px 20px var(--glow); }

    /* HERO */
    .hero { min-height:100vh; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; padding:120px 48px 80px; }
    .hero-content { max-width:1100px; width:100%; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; position:relative; z-index:1; }
    .hero-eyebrow { font-family:'DM Mono',monospace; font-size:0.8rem; letter-spacing:0.2em; color:var(--accent); text-transform:uppercase; margin-bottom:20px; display:flex; align-items:center; gap:10px; }
    .hero-eyebrow::before { content:''; display:block; width:30px; height:1px; background:var(--accent); }
    .hero-title { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(2.5rem,5vw,4rem); line-height:1.05; letter-spacing:-0.03em; margin-bottom:16px; color:var(--text); }
    .hero-title span { color:var(--accent); }
    .hero-typing { font-family:'DM Mono',monospace; font-size:1.1rem; color:var(--accent2); min-height:1.8em; display:flex; align-items:center; gap:2px; margin-bottom:24px; }
    .hero-typing::after { content:'|'; animation:blink 1s infinite; color:var(--accent); }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    .hero-bio { color:var(--text2); font-size:1rem; line-height:1.8; margin-bottom:40px; max-width:460px; }
    .hero-socials { display:flex; gap:16px; margin-bottom:40px; }
    .hero-btns { display:flex; gap:16px; }
    .hero-img-wrap { position:relative; display:flex; justify-content:center; align-items:center; }
    .hero-img-ring { width:340px; height:340px; border-radius:50%; border:2px solid var(--accent); padding:8px; position:relative; animation:spin-slow 20s linear infinite; }
    @keyframes spin-slow { to { transform:rotate(360deg); } }
    .hero-img-ring::before { content:''; position:absolute; inset:-12px; border-radius:50%; border:1px dashed var(--border); }
    .hero-img-inner { width:100%; height:100%; border-radius:50%; overflow:hidden; background:linear-gradient(135deg, var(--accent), var(--accent2)); display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-size:5rem; font-weight:800; color:#fff; animation:spin-slow-reverse 20s linear infinite; }
    .hero-img-inner img { width:100%; height:100%; object-fit:cover; }
    @keyframes spin-slow-reverse { to { transform:rotate(-360deg); } }
    .hero-stat-card { position:absolute; background:var(--card); border:1px solid var(--border); border-radius:12px; padding:12px 18px; backdrop-filter:blur(10px); z-index:2; }
    .hero-stat-card.top-right { top:0; right:-20px; }
    .hero-stat-card.bottom-left { bottom:20px; left:-30px; }
    .hero-stat-num { font-family:'Syne',sans-serif; font-size:1.4rem; font-weight:800; color:var(--accent); }
    .hero-stat-label { font-size:0.75rem; color:var(--text2); }

    /* SERVICES */
    .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
    .service-card { background:var(--card); border:1px solid var(--border); border-radius:20px; padding:36px 32px; position:relative; overflow:hidden; transition:all 0.3s; cursor:default; }
    .service-card::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,var(--accent),var(--accent2)); opacity:0; transition:opacity 0.3s; border-radius:20px; }
    .service-card:hover::before { opacity:0.06; }
    .service-card:hover { border-color:color-mix(in srgb, var(--accent) 50%, transparent); transform:translateY(-6px); box-shadow:0 20px 60px var(--glow); }
    .service-icon { width:56px; height:56px; border-radius:14px; background:linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, transparent), color-mix(in srgb, var(--accent2) 15%, transparent)); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; margin-bottom:24px; font-size:1.6rem; position:relative; z-index:1; }
    .service-card h3 { font-family:'Syne',sans-serif; font-weight:700; font-size:1.2rem; color:var(--text); margin-bottom:12px; position:relative; z-index:1; }
    .service-card p { color:var(--text2); font-size:0.9rem; line-height:1.7; position:relative; z-index:1; }
    .service-number { position:absolute; top:24px; right:28px; font-family:'DM Mono',monospace; font-size:2.5rem; font-weight:500; color:var(--border); line-height:1; }

    /* SKILLS */
    .skills-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:12px; }
    .skill-chip { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:20px 12px; display:flex; flex-direction:column; align-items:center; gap:10px; transition:all 0.25s; cursor:default; }
    .skill-chip:hover { border-color:var(--accent); transform:translateY(-5px); box-shadow:0 12px 30px var(--glow); background:var(--card2); }
    .skill-chip img { width:44px; height:44px; object-fit:contain; }
    .skill-chip span { font-size:0.75rem; font-weight:500; color:var(--text2); text-align:center; }

    /* EXPERIENCE */
    .exp-timeline { position:relative; padding-left:40px; }
    .exp-timeline::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:linear-gradient(to bottom, var(--accent), var(--accent2), transparent); border-radius:2px; }
    .exp-item { position:relative; margin-bottom:40px; }
    .exp-dot { position:absolute; left:-47px; top:20px; width:14px; height:14px; border-radius:50%; background:var(--accent); border:3px solid var(--bg); box-shadow:0 0 0 3px var(--accent), 0 0 20px var(--glow); }
    .exp-card { background:var(--card); border:1px solid var(--border); border-radius:18px; padding:28px 32px; transition:all 0.3s; }
    .exp-card:hover { border-color:color-mix(in srgb, var(--accent) 40%, transparent); box-shadow:0 12px 40px var(--glow); }
    .exp-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px; flex-wrap:wrap; gap:12px; }
    .exp-role { font-family:'Syne',sans-serif; font-size:1.15rem; font-weight:700; color:var(--text); }
    .exp-badge { font-family:'DM Mono',monospace; font-size:0.72rem; padding:5px 12px; border-radius:20px; background:color-mix(in srgb, var(--accent) 15%, transparent); color:var(--accent); border:1px solid color-mix(in srgb, var(--accent) 30%, transparent); letter-spacing:0.05em; }
    .exp-company { color:var(--accent2); font-weight:500; font-size:0.9rem; margin-bottom:4px; }
    .exp-duration { font-family:'DM Mono',monospace; font-size:0.78rem; color:var(--text2); margin-bottom:16px; }
    .exp-points { list-style:none; display:flex; flex-direction:column; gap:8px; }
    .exp-points li { color:var(--text2); font-size:0.88rem; line-height:1.6; display:flex; align-items:flex-start; gap:10px; }
    .exp-points li::before { content:'▸'; color:var(--accent); flex-shrink:0; margin-top:2px; font-size:0.8rem; }

    /* PROJECTS */
    .projects-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
    .project-card { background:var(--card); border:1px solid var(--border); border-radius:20px; overflow:hidden; transition:all 0.3s; display:flex; flex-direction:column; }
    .project-card:hover { transform:translateY(-8px); box-shadow:0 20px 60px var(--glow); border-color:color-mix(in srgb, var(--accent) 40%, transparent); }
    .project-img { height:200px; background:linear-gradient(135deg, var(--bg3), var(--bg2)); display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
    .project-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s; }
    .project-card:hover .project-img img { transform:scale(1.06); }
    .project-img-overlay { position:absolute; inset:0; background:linear-gradient(to bottom, transparent 40%, var(--card)); z-index:1; }
    .project-img-icon { font-size:3.5rem; z-index:1; }
    .project-tag { position:absolute; top:12px; right:12px; z-index:2; font-family:'DM Mono',monospace; font-size:0.68rem; padding:4px 10px; border-radius:20px; background:color-mix(in srgb, var(--accent) 20%, transparent); color:var(--accent); border:1px solid color-mix(in srgb, var(--accent) 35%, transparent); backdrop-filter:blur(8px); }
    .project-body { padding:24px; flex:1; display:flex; flex-direction:column; }
    .project-title { font-family:'Syne',sans-serif; font-size:1.1rem; font-weight:700; color:var(--text); margin-bottom:8px; }
    .project-desc { color:var(--text2); font-size:0.85rem; line-height:1.65; margin-bottom:20px; flex:1; }
    .project-footer { display:flex; align-items:center; justify-content:space-between; }
    .project-techs { display:flex; gap:6px; flex-wrap:wrap; }
    .tech-tag { font-family:'DM Mono',monospace; font-size:0.68rem; padding:3px 9px; border-radius:6px; background:var(--bg3); color:var(--text2); border:1px solid var(--border); }
    .project-link { display:flex; align-items:center; gap:6px; color:var(--accent); font-size:0.82rem; font-weight:600; text-decoration:none; transition:gap 0.2s; }
    .project-link:hover { gap:10px; }

    /* BLOG */
    .blog-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
    .blog-card { background:var(--card); border:1px solid var(--border); border-radius:18px; overflow:hidden; transition:all 0.3s; text-decoration:none; display:block; }
    .blog-card:hover { transform:translateY(-6px); box-shadow:0 16px 50px var(--glow); border-color:color-mix(in srgb, var(--accent) 40%, transparent); }
    .blog-img { height:150px; background:var(--bg3); position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; font-size:2.5rem; }
    .blog-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s; }
    .blog-card:hover .blog-img img { transform:scale(1.08); }
    .blog-color-bar { height:4px; }
    .blog-body { padding:18px; }
    .blog-title { font-family:'Syne',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:8px; }
    .blog-desc { color:var(--text2); font-size:0.82rem; line-height:1.6; margin-bottom:14px; }
    .blog-link { font-family:'DM Mono',monospace; font-size:0.75rem; color:var(--accent); letter-spacing:0.05em; display:flex; align-items:center; gap:5px; }

    /* EDUCATION */
    .edu-grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
    .edu-col-title { font-family:'Syne',sans-serif; font-size:1.1rem; font-weight:700; color:var(--text); margin-bottom:20px; display:flex; align-items:center; gap:10px; }
    .edu-col-title::after { content:''; flex:1; height:1px; background:var(--border); }
    .edu-item { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:22px 24px; margin-bottom:14px; transition:all 0.2s; position:relative; overflow:hidden; }
    .edu-item::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:linear-gradient(to bottom, var(--accent), var(--accent2)); border-radius:3px 0 0 3px; }
    .edu-item:hover { border-color:color-mix(in srgb, var(--accent) 35%, transparent); transform:translateX(4px); }
    .edu-course { font-weight:600; color:var(--text); font-size:0.9rem; margin-bottom:5px; }
    .edu-institute { color:var(--text2); font-size:0.82rem; font-style:italic; margin-bottom:10px; }
    .edu-meta { display:flex; justify-content:space-between; }
    .edu-session { font-family:'DM Mono',monospace; font-size:0.75rem; color:var(--text2); }
    .edu-grade { font-family:'DM Mono',monospace; font-size:0.75rem; color:var(--accent); font-weight:500; }

    /* ABOUT */
    .about-wrap { display:grid; grid-template-columns:1fr 1.6fr; gap:60px; align-items:start; }
    .about-img-wrap { position:relative; }
    .about-img { width:100%; aspect-ratio:3/4; border-radius:24px; overflow:hidden; background:linear-gradient(135deg, var(--accent), var(--accent2)); display:flex; align-items:center; justify-content:center; font-size:8rem; }
    .about-img img { width:100%; height:100%; object-fit:cover; }
    .about-img-tag { position:absolute; bottom:-16px; right:-16px; background:var(--card); border:1px solid var(--border); border-radius:14px; padding:14px 20px; }
    .about-tag-num { font-family:'Syne',sans-serif; font-size:2rem; font-weight:800; color:var(--accent); }
    .about-tag-label { font-size:0.75rem; color:var(--text2); }
    .about-content p { color:var(--text2); font-size:0.95rem; line-height:1.8; margin-bottom:28px; }
    .about-aspects { display:flex; flex-direction:column; gap:12px; }
    .aspect-item { display:flex; align-items:center; gap:12px; background:var(--card); border:1px solid var(--border); border-radius:12px; padding:12px 18px; transition:all 0.2s; }
    .aspect-item:hover { border-color:var(--accent); transform:translateX(4px); }
    .aspect-arrow { color:var(--accent); font-size:0.8rem; flex-shrink:0; }
    .aspect-text { font-size:0.88rem; color:var(--text); font-weight:500; }

    /* FOOTER */
    .footer { border-top:1px solid var(--border); padding:60px 48px 36px; background:var(--bg); }
    .footer-inner { max-width:1100px; margin:0 auto; }
    .footer-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:48px; gap:40px; }
    .footer-brand p { color:var(--text2); font-size:0.88rem; line-height:1.7; max-width:280px; margin-top:12px; }
    .footer-nav h4 { font-family:'Syne',sans-serif; font-weight:700; font-size:0.85rem; color:var(--text); margin-bottom:16px; letter-spacing:0.05em; text-transform:uppercase; }
    .footer-nav ul { list-style:none; display:flex; flex-direction:column; gap:10px; }
    .footer-nav ul a { color:var(--text2); font-size:0.85rem; text-decoration:none; transition:color 0.2s; }
    .footer-nav ul a:hover { color:var(--accent); }
    .footer-socials { display:flex; gap:12px; margin-top:16px; } 
    .footer-logo { font-family:'Syne',sans-serif; font-weight:800; font-size:1.3rem; letter-spacing:-0.02em; color:var(--text); display:flex; align-items:center; gap:8px; }
    .footer-bottom { border-top:1px solid var(--border); padding-top:24px; display:flex; justify-content:space-between; align-items:center; }
    .footer-bottom p { color:var(--text2); font-size:0.82rem; }

    /* SCROLL TO TOP */
    .scroll-top-btn { position:fixed; bottom:32px; right:32px; z-index:90; width:46px; height:46px; border-radius:12px; border:1px solid var(--border); background:var(--card); color:var(--accent); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.3s; box-shadow:0 4px 20px var(--glow); font-size:1.1rem; }
    .scroll-top-btn:hover { transform:translateY(-4px); box-shadow:0 8px 28px var(--glow); border-color:var(--accent); }
    .scroll-top-btn.hidden { opacity:0; pointer-events:none; transform:translateY(10px); }

    /* RESPONSIVE */
    @media (max-width:1024px) {
      .hero-content,.about-wrap,.edu-grid { grid-template-columns:1fr; }
      .skills-grid { grid-template-columns:repeat(4,1fr); }
      .services-grid,.projects-grid { grid-template-columns:repeat(2,1fr); }
      .blog-grid { grid-template-columns:repeat(2,1fr); }
      .hero-img-wrap { display:none; }
      .section { padding:80px 24px; }
      .footer { padding:48px 24px 28px; }
      .footer-top { flex-direction:column; gap:32px; }
    }
    @media (max-width:640px) {
      .services-grid,.projects-grid,.blog-grid { grid-template-columns:1fr; }
      .skills-grid { grid-template-columns:repeat(3,1fr); }
      .about-wrap { grid-template-columns:1fr; }
      .edu-grid { grid-template-columns:1fr; }
    }
  `}</style>
);

export default GlobalStyles;